/**
 * Configures postcss with openprops as standalone file
 * (copy-pasteable)
 */

import { HandlerContext } from "$fresh/server.ts";
import * as log from "https://deno.land/std@0.167.0/log/mod.ts";
import postcss from "https://deno.land/x/postcss@8.4.16/mod.js";
import postcssJs from "npm:postcss-js@4.0.0";
import OpenProps from "npm:open-props@1.5.1";

export const postCssInstance = postcss([
  // postcssInject({
  //   cssFilePath: "npm:open-props@1.5.1/open-props/postcss/index.css",
  // }),
]);

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

  // sanitize OpenProps
  const onlyProps = Object.entries(OpenProps).filter(([key, val]) =>
    key.startsWith("--")
  );
  const openPropsObject = {
    ":root": Object.fromEntries(onlyProps),
  };

  const result = await postCssInstance.process(openPropsObject, {
    parser: postcssJs,
  });

  const headers = new Headers();
  headers.set("Content-Type", "text/css");

  return new Response(result.css, { headers });
};
