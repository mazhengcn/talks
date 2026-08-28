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
const filters = publishedTalks
  .filter((talk): talk is string => Boolean(talk))
  .flatMap((talk) => ["--filter", talk]);

console.log(`Building ${filters.length / 2} published talks`);
await x("bun", ["run", "--parallel", ...filters, "build"], {
  throwOnError: true,
  nodeOptions: {
    cwd: root,
    stdio: "inherit",
  },
});

await collectAllMetadata({
  outputFiles: [join(distDir, "talks-metadata.json")],
});
