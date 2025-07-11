import tailwindPostcss from "@tailwindcss/postcss";
import postcss from "postcss";
import { log } from "@src/log.ts";
import { FreshContext } from "$fresh/server.ts";

export const postCssInstance = postcss([
  tailwindPostcss(),
]);

log.setup({
  handlers: {
    console: new log.ConsoleHandler("DEBUG"),
  },
  loggers: {
    "tailwind_route": {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

const logger = log.getLogger("tailwind_route");

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
) => {
  const cssContent = await Deno.readTextFile("css/tailwind.css");
  const result = await postCssInstance.process(cssContent, {
    from: "css/tailwind.css",
  });
  return new Response(result.css, {
    headers: {
      "Content-Type": "text/css",
    },
  });
};
