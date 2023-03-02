/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { prefillCssCache } from "./src/prefillCssCache.ts";

// make sure that the open-props files are available in css_deps folder 
// Note: was a dnamic import, but dynamic imports are not allowed on deno currently
// Note 2: Deno.writeTextFile is not available on deno deploy. 
// => need to have all the files pre-downloaded and pushed into git!
// import './scripts/download-openprops.ts';

// generate css files in /static via postcss (Test 04)
// NOTE: DOES NOT WORK ON DENO DEPLOY! 
// - but the result will be generated locally every time and can be committed 


prefillCssCache();

await start(manifest);
