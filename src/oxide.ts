import { generateTailwindCSS } from "@bjesuiter/deno-tailwindcss-iso";
import { cssCache } from "./cssCache.ts";

export async function generateAndCacheTailwindCss() {
  //   console.info("tailwind route, got path", _ctx.params.path);
  const css = `@import "tailwindcss";`;
  const content = await Deno.readTextFile("routes/pages/06-tailwind-iso.tsx");

  const resultCss = await generateTailwindCSS({
    content: content,
    css: css,
  });

  cssCache.set("tailwind.css", resultCss);

  return resultCss;
}
