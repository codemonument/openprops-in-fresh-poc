/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { preprocessCss } from "./src/preprocess-css.ts";

// make sure that the open-props files are available in css_deps folder 
await (import('./scripts/download-openprops.ts'))

// generate css files in /static via postcss (Test 04)
preprocessCss()

await start(manifest);
