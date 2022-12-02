import { HandlerContext } from "$fresh/server.ts";
import { postCssInstance } from "../../deps/postcss.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const fileContent = await Deno.readTextFile("static/global.css");
  const result = await postCssInstance.process(fileContent, {
    from: "static/global.css",
  });

  const headers = new Headers();
  headers.set("Content-Type", "text/css");

  return new Response(result.css, { headers });
};
