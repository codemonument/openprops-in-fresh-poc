export * from "https://deno.land/x/zod@v3.20.5/mod.ts"

export { DOMParser } from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";

// If you don't want to init the wasm directly with top-level await 
// but instead want to do it later 
// export {
//     DOMParser,
//     initParser,
// } from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm-noinit.ts";