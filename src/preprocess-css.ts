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
    postcssImport({
        addModulesDirectories: ['css_deps']
    }    ),
    postcssJitProps(OpenProps),
]);

export async function preprocessCss() {

    // cache npm:open-props locally 
    // cmd does not work locally and npm: does not work at deno deploy! => committing open-props node_modules content into repo :(
    // const cmd = new Deno.Command('deno cache --node-modules-dir npm:open-props@1.5.5');
    // const out = await cmd.output();

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

