/**
 * Configures postcss with openprops as standalone file
 * (copy-pasteable)
 */

import { HandlerContext } from "$fresh/server.ts";
import * as log from "std_log";
import postcss from "postcss";
import postcssJs from "postcss-js";
import OpenProps from "open-props";

// Good: has all normal openprops
// Bad: Normalize Openprop missing!

export const postCssInstance = postcss([
  // postcssInject({
  //   cssFilePath: "https://esm.sh/open-props@1.5.1/open-props/postcss/index.css",
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

  // sanitize OpenProps
  const onlyProps = Object.entries(OpenProps).filter(([key, val]) =>
    key.startsWith("--")
  );
  const notProps = Object.entries(OpenProps).filter(([key, val]) =>
    !key.startsWith("--")
  );
  const onlyAtRules = Object.entries(OpenProps).filter(([key, val]) =>
    key.startsWith("@")
  );

  const openPropsObject = {
    ":root": Object.fromEntries(onlyProps),
  };
  // const openPropsObject = {
  //   ...Object.fromEntries(onlyProps),
  // };

  const result = await postCssInstance.process(openPropsObject, {
    parser: postcssJs,
  });

  const headers = new Headers();
  headers.set("Content-Type", "text/css");

  logger.debug(
    `Generated OpenProps CSS File: /postcss/${webservPath}`,
    result.css,
  );

  return new Response(result.css, { headers });
};
