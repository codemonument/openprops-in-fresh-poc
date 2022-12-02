import postcss from "https://deno.land/x/postcss@8.4.16/mod.js";

// See: https://www.npmjs.com/package/postcss-jit-props
import postcssJitProps from "npm:postcss-jit-props@1.0.8";

// See: https://www.npmjs.com/package/open-props
import OpenProps from "npm:open-props@1.5.1";

export const postCssInstance = postcss([postcssJitProps(OpenProps)]);
