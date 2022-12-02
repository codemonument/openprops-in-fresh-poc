import { HandlerContext } from "$fresh/server.ts";
import postcss from "https://deno.land/x/postcss@8.4.16/mod.js";

/**
 * Configures postcss with openprops as standalone file
 * (copy-pasteable)
 */

// See: https://www.npmjs.com/package/postcss-jit-props
import postcssJitProps from "npm:postcss-jit-props@1.0.8";
// See: https://www.npmjs.com/package/open-props
import OpenProps from "npm:open-props@1.5.1";

export const postCssInstance = postcss([postcssJitProps(OpenProps)]);

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const webservPath = _ctx.params.path;
  const filesystemPath = `static/${webservPath}`;
  console.log(filesystemPath);
  const fileContent = await Deno.readTextFile(filesystemPath);
  const result = await postCssInstance.process(fileContent, {
    from: filesystemPath,
  });

  const headers = new Headers();
  headers.set("Content-Type", "text/css");

  return new Response(result.css, { headers });
};
