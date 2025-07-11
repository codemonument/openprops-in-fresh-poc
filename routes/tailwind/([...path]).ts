// import tailwindPostcss from "@tailwindcss/postcss";
// import postcss from "postcss";
// import { log } from "@src/log.ts";
// import { FreshContext } from "$fresh/server.ts";

// export const postCssInstance = postcss([
//   tailwindPostcss(),
// ]);

// log.setup({
//   handlers: {
//     console: new log.ConsoleHandler("DEBUG"),
//   },
//   loggers: {
//     "tailwind_route": {
//       level: "DEBUG",
//       handlers: ["console"],
//     },
//   },
// });

// const logger = log.getLogger("tailwind_route");

// export const handler = async (
//   _req: Request,
//   _ctx: FreshContext,
// ) => {
//   //   console.info("tailwind route, got path", _ctx.params.path);
//   const cssContent = await Deno.readTextFile("css/tailwind.css");
//   //   console.debug("cssContent", cssContent);
//   const result = await postCssInstance.process(cssContent, {
//     from: "css/tailwind.css",
//   });
//   //   console.debug("result", result);
//   return new Response(result.css, {
//     headers: {
//       "Content-Type": "text/css",
//     },
//   });
// };
