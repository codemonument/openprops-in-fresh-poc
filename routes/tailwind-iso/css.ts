import { log } from "@src/log.ts";
import { FreshContext } from "$fresh/server.ts";
import { generateTailwindCSS } from "@bjesuiter/deno-tailwindcss-iso";
import { cssCache } from "@src/cssCache.ts";

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
  if (cssCache.has("tailwind.css")) {
    return new Response(cssCache.get("tailwind.css"), {
      headers: {
        "Content-Type": "text/css",
      },
    });
  }

  const resultCss = await generateTailwindCSS();

  return new Response(resultCss, {
    headers: {
      "Content-Type": "text/css",
    },
  });
};
