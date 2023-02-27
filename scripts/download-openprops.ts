import { ensureDir } from "https://deno.land/std@0.178.0/fs/mod.ts";
import { join } from "https://deno.land/std@0.178.0/path/mod.ts";

/**
 * Get Latest version: https://unpkg.com/open-props
 */
const baseUrl = "https://unpkg.com/open-props@1.5.1";

// Idea: provide these dependencies for postcssImport to allow compilation to work properly
// This is the replacement for caching node_modules with open-props locally
const targetDir = `css-deps/open-props`;
await ensureDir(targetDir);

const openPropsMin =
  await (await fetch(`${baseUrl}/open-props.min.css`))
    .text();
await Deno.writeTextFile(join(targetDir, "open-props.min.css"), openPropsMin);

const normalize =
  await (await fetch(`${baseUrl}/normalize.min.css`))
    .text();
await Deno.writeTextFile(join(targetDir, "normalize.min.css"), normalize);

const buttons =
  await (await fetch(`${baseUrl}/buttons.min.css`))
    .text();
await Deno.writeTextFile(join(targetDir, "buttons.min.css"), buttons);
