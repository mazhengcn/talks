import fs from "node:fs/promises";
import { dirname } from "node:path";
import fg from "fast-glob";

const packageFiles = (
  await fg("talks/*/package.json", {
    onlyFiles: true,
  })
).toSorted();

console.log(packageFiles);

const bases = (
  await Promise.all(
    packageFiles.map(async (file) => {
      const talkRoot = dirname(file);
      const base = talkRoot.split("/").pop();
      if (!base) return;
      const metadata = JSON.parse(
        await fs.readFile(`${talkRoot}/metadata.json`, "utf-8"),
      );
      return {
        dir: talkRoot,
        base,
        published: metadata.published !== false,
      };
    }),
  )
).filter((x): x is { dir: string; base: string; published: boolean } =>
  Boolean(x),
);

console.log(bases);
const redirects = bases
  .flatMap(({ base, published, dir }) => {
    const parts: string[] = [];

    if (published) {
      parts.push(`
[[redirects]]
from = "/${base}/pdf"
to = "/${base}/slides.pdf"
status = 302`);
    }

    parts.push(`
[[redirects]]
from = "/${base}/src"
to = "https://github.com/mazhengcn/talks/tree/main/${dir}"
status = 302`);

    if (published)
      parts.push(`
[[redirects]]
from = "/${base}/*"
to = "/${base}/index.html"
status = 200`);

    return parts;
  })
  .join("\n");

const content = `
[build]
publish = "dist"
command = "bun --bun run build"

# CORS headers for metadata API
[[headers]]
  for = "/talks-metadata.json"
  [headers.values]
    Access-Control-Allow-Origin = "*"
    Access-Control-Allow-Methods = "GET, OPTIONS"
    Access-Control-Allow-Headers = "Content-Type"
    Cache-Control = "public, max-age=3600"

${redirects}

[[redirects]]
from = "/"
to = "https://zheng-talks.netlify.app"
status = 302
`;

await fs.writeFile("netlify.toml", content, "utf-8");
