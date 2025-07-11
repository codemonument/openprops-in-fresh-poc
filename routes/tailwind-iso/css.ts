import { log } from "@src/log.ts";
import { FreshContext } from "$fresh/server.ts";
import { generateTailwindCSS } from "@bjesuiter/deno-tailwindcss-iso";

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
  //   console.info("tailwind route, got path", _ctx.params.path);
  const css = `@import "tailwindcss";`;
  const content = await Deno.readTextFile("routes/pages/06-tailwind-iso.tsx");

  const resultCss = await generateTailwindCSS({
    content: content,
    css: css,
  });

  return new Response(resultCss, {
    headers: {
      "Content-Type": "text/css",
    },
  });
};
