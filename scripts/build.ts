import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import { dirname, join } from "node:path";
import process from "node:process";
import { findUp } from "find-up";
import { x } from "tinyexec";

const cwd = process.cwd();
const base = cwd.split("/").pop();
const args = process.argv.slice(2);

const lockFile = await findUp("bun.lock", { cwd });
if (!lockFile) {
  console.error("bun.lock not found — not running inside the repo");
  process.exit(1);
}
const root = dirname(lockFile);

const dirStale = join(root, "dist-stale", `${base}`);
const dirDist = join(root, "dist", `${base}`);

if (existsSync(dirStale)) {
  console.log("Stale directory found, copying to dist");
  await fs.cp(
    `${root}/dist-stale/talks-metadata.json`,
    `${root}/dist/talks-metadata.json`,
  );
  if (!existsSync(dirDist)) {
    await fs.mkdir(dirname(dirDist), { recursive: true });
  } else {
    await fs.rm(dirDist, { recursive: true });
  }
  await fs.cp(dirStale, dirDist, { recursive: true });
} else {
  console.log("No stale directory found, building");

  const command = [
    "slidev",
    "build",
    "--base",
    `/${base}`,
    "--out",
    `../../dist/${base}`,
    ...args,
  ];

  console.log("Building", command.join(" "));

  await x("bunx", command, {
    nodeOptions: {
      cwd,
      stdio: "inherit",
    },
  });
}

const assetsDir = join(cwd, "assets");
const pdfPath = join(assetsDir, `${base}.pdf`);

if (existsSync(pdfPath)) {
  console.log(`${pdfPath} file exists, skipping exporting`);
} else {
  if (!existsSync(assetsDir)) {
    console.log("Creating assets directory");
    await fs.mkdir(assetsDir, { recursive: true });
  }

  console.log("Exporting slides with per-slide PDF");
  const command = [
    "slidev",
    "export",
    "--per-slide",
    "--output",
    `./assets/${base}.pdf`,
  ];

  console.log("Exporting", command.join(" "));
  await x("bunx", command, {
    nodeOptions: {
      cwd,
      stdio: "inherit",
    },
  });
}
