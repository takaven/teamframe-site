import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const walkthroughUrl = process.env.NEXT_PUBLIC_TEAMFRAME_WALKTHROUGH_URL ?? "";

await rm(dist, { force: true, recursive: true });
await mkdir(dist, { recursive: true });
await cp(join(root, "index.html"), join(dist, "index.html"));
await cp(join(root, "styles.css"), join(dist, "styles.css"));
await cp(join(root, "site.js"), join(dist, "site.js"));
await cp(join(root, "public", "assets"), join(dist, "assets"), { recursive: true });
await writeFile(
  join(dist, "config.js"),
  `window.TEAMFRAME_WALKTHROUGH_URL = ${JSON.stringify(walkthroughUrl)};\n`,
);

console.log("Built TeamFrame commercial site to dist/");
