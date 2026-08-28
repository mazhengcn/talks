import { basename, dirname, join } from "node:path";
import process from "node:process";
import { findUp } from "find-up";
import { x } from "tinyexec";

const cwd = process.cwd();
const base = basename(cwd);
const args = process.argv.slice(2);

const lockFile = await findUp("bun.lock", { cwd });
if (!lockFile) {
  console.error("bun.lock not found — not running inside the repo");
  process.exit(1);
}
const root = dirname(lockFile);

const dirDist = join(root, "dist", `${base}`);

const command = [
  "slidev",
  "build",
  "--base",
  `/${base}/`,
  "--out",
  dirDist,
  "--download",
  "--output",
  join(dirDist, "slides.pdf"),
  "--per-slide",
  ...args,
];

console.log("Building", command.join(" "));
await x("bunx", command, {
  throwOnError: true,
  nodeOptions: {
    cwd,
    stdio: "inherit",
  },
});
