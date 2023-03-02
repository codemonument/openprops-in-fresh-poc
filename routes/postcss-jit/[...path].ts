/**
 * Configures postcss with openprops as standalone file
 * (copy-pasteable)
 */

import { HandlerContext } from "$fresh/server.ts";
import * as log from "std_log";
import postcss from "postcss";
// See: https://www.npmjs.com/package/postcss-jit-props
import postcssJitProps from "postcss-jit-props";
// See: https://www.npmjs.com/package/open-props
import OpenProps from "open-props";
import postcssImport from "postcss-import";
import { cssCache } from "@src/cssCache.ts";

export const postCssInstance = postcss([
  postcssImport(),
  postcssJitProps(OpenProps),
]);

log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  },
  loggers: {
    "postcss_jit_route": {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

const logger = log.getLogger("postcss_jit_route");

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const webservPath = _ctx.params.path;
  const fsPath = `static/${webservPath}`;

  // load input css file
  const rawCssContent = await Deno.readTextFile(fsPath);
  const rawCssBytes = new TextEncoder().encode(rawCssContent);

  const fileHash = crypto.subtle.digest('SHA-256', rawCssBytes);

  // FIXME: Why do I not have typings for cssCache here?!?
  if (! await cssCache.has(fileHash)) {
    // process css file and cache it
    const processingResult = await postCssInstance.process(rawCssContent, {
      from: fsPath,
    });
    cssCache.set(fileHash, processingResult.css)
    logger.debug(`PostCSS Transformed: ${fsPath}`, { fileHash });
  }

  // get storedCSS from cache
  const storedCSS = cssCache.get(fileHash);
  logger.debug(`PostCSS found in cache: ${fsPath}`, { fileHash });

  // deliver stored css
  return new Response(storedCSS, {
    headers: new Headers([
      ["Content-Type", "text/css"]
    ])
  });
};
