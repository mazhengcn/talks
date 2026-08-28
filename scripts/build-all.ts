import fs from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";
import fg from "fast-glob";
import { x } from "tinyexec";
import { collectAllMetadata } from "./collect-metadata";

const root = process.cwd();
const distDir = join(root, "dist");

await fs.rm(distDir, { recursive: true, force: true });
await fs.mkdir(distDir, { recursive: true });

const metadataFiles = await fg("talks/*/metadata.json", { cwd: root });
const publishedTalks = await Promise.all(
  metadataFiles.map(async (file) => {
    const metadata = JSON.parse(await fs.readFile(join(root, file), "utf-8"));
    return metadata.published === false ? undefined : file.split("/")[1];
  }),
);
const talks = publishedTalks.filter((talk): talk is string => Boolean(talk));

console.log(`Building ${talks.length} published talks`);
// Slidev's downloadable-PDF build uses a fixed print-server port, so these
// builds must run sequentially to avoid intermittent port collisions.
for (const talk of talks) {
  await x("bun", ["run", "--filter", talk, "build"], {
    throwOnError: true,
    nodeOptions: {
      cwd: root,
      stdio: "inherit",
    },
  });
}

await collectAllMetadata({
  outputFiles: [join(distDir, "talks-metadata.json")],
});
