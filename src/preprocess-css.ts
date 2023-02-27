import postcss from "postcss";
// See: https://www.npmjs.com/package/postcss-jit-props
import postcssJitProps from "postcss-jit-props";
// See: https://www.npmjs.com/package/open-props
import OpenProps from "open-props";
import postcssImport from "postcss-import";
import { log } from "@src/log.ts";
import { expandGlob } from "std_fs"
import { join } from "std_path"

const logger = log.getLogger("openprops-in-fresh");

export const postcssInstance = postcss([
    postcssImport(),
    postcssJitProps(OpenProps),
]);

export async function preprocessCss() {
    const cssFileEntries = expandGlob('css/*.css', { root: Deno.cwd() });

    for await (const file of cssFileEntries) {
        const inPath = file.path;
        const outPath = join('static', file.name);
        const cssContent = await Deno.readTextFile(inPath);
        const result = await postcssInstance.process(cssContent, {
            from: inPath,
            to: outPath
        });

        logger.info(`CSS generated: ${file.name}`);

        await Deno.writeTextFile(outPath, result.css);
    }
}

