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
  const filesystemPath = `static/${webservPath}`;
  logger.debug(`PostCSS Transformed: ${filesystemPath}`);
  const fileContent = await Deno.readTextFile(filesystemPath);
  const result = await postCssInstance.process(fileContent, {
    from: filesystemPath,
  });

  const headers = new Headers();
  headers.set("Content-Type", "text/css");

  return new Response(result.css, { headers });
};
