import { z } from "./_deps.ts"
import { Plugin, PluginRenderResult } from "$fresh/server.ts";
import { DOMParser } from "./_deps.ts"

export const OpenPropsPluginOptions = z.object({});
export type OpenPropsPluginOptions = z.infer<typeof OpenPropsPluginOptions>;


/**
 * Work in Progress!
 * 
 * Ideas: 
 * https://deno.land/manual@v1.25.4/jsx_dom/deno_dom
 * https://github.com/denoland/fresh/blob/1b3c9f2569c5d56a6d37c366cb5940f26b7e131e/www/main.ts
 * https://github.com/denoland/fresh/blob/main/plugins/twind.ts
 * 
 * @param options 
 * @returns 
 */
export function openPropsPlugin(options: OpenPropsPluginOptions) {



    const plugin: Plugin = {
        name: "openprops_plugin"
        render(ctx) {
            const res = ctx.render();
            const doc = new DOMParser().parseFromString(res.htmlText, "text/html");
            const allStyleTags = doc.querySelectorAll('style');

            // transform styles with href 

            // transform inline styles
            // const inlineStyles = 




            const pluginRenderResult: PluginRenderResult = {
                styles: []
            }

            return pluginRenderResult;
        }

    }

    return plugin;
}

export default function twind(options: Options): Plugin {
    const sheet = virtualSheet();
    setup(options, sheet);

    return {
        name: "twind",
        entrypoints: { "main": main },
        render(ctx) {
            sheet.reset(undefined);
            const res = ctx.render();
            const cssTexts = [...sheet.target];
            const snapshot = sheet.reset();
            const scripts = [];
            let cssText: string;
            if (res.requiresHydration) {
                const precedences = snapshot[1] as number[];
                cssText = cssTexts.map((cssText, i) =>
                    `${cssText}/*${precedences[i].toString(36)}*/`
                ).join("\n");
                const mappings: (string | [string, string])[] = [];
                for (
                    const [key, value] of (snapshot[3] as Map<string, string>).entries()
                ) {
                    if (key === value) {
                        mappings.push(key);
                    } else {
                        mappings.push([key, value]);
                    }
                }
                scripts.push({ entrypoint: "main", state: mappings });
            } else {
                cssText = cssTexts.join("\n");
            }
            return {
                scripts,
                styles: [{ cssText, id: STYLE_ELEMENT_ID }],
            };
        },
    };
}