import { ensureDir } from "https://deno.land/std@0.167.0/fs/mod.ts";
import { join } from "https://deno.land/std@0.167.0/path/mod.ts";

/**
 * Get Latest version: https://unpkg.com/open-props
 */
const targetDir = `static/open-props`;
await ensureDir(targetDir);

const openPropsMin =
  await (await fetch("https://unpkg.com/open-props@1.5.1/open-props.min.css"))
    .text();
await Deno.writeTextFile(join(targetDir, "open-props.min.css"), openPropsMin);

const normalize =
  await (await fetch("https://unpkg.com/open-props/normalize.min.css"))
    .text();
await Deno.writeTextFile(join(targetDir, "normalize.min.css"), normalize);

const buttons =
  await (await fetch("https://unpkg.com/open-props/buttons.min.css"))
    .text();
await Deno.writeTextFile(join(targetDir, "buttons.min.css"), buttons);
