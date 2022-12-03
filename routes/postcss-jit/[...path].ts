/**
 * Configures postcss with openprops as standalone file
 * (copy-pasteable)
 */

import { HandlerContext } from "$fresh/server.ts";
import * as log from "https://deno.land/std@0.167.0/log/mod.ts";
import postcss from "https://deno.land/x/postcss@8.4.16/mod.js";
// See: https://www.npmjs.com/package/postcss-jit-props
import postcssJitProps from "npm:postcss-jit-props@1.0.8";
// See: https://www.npmjs.com/package/open-props
import OpenProps from "npm:open-props@1.5.1";

export const postCssInstance = postcss([postcssJitProps(OpenProps)]);

log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  },
  loggers: {
    "postcss_resource_route": {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

const logger = log.getLogger("postcss_resource_route");

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
