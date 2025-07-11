import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Openprops in Deno Fresh</title>
      </Head>
      <h1>OpenProps in Deno Fresh</h1>
      <ul>
        <li>
          <a href="./pages/01-static">01 - With Static OpenProps CSS Files</a>
        </li>
        <li>
          <a href="./pages/02-postcss-route">
            02 - With PostCSS Route (not Treeshaken)
          </a>
        </li>
        <li>
          <a href="./pages/03-postcss-jit-route">
            03 - With PostCSS JIT Route (Treeshaken)
          </a>
        </li>

        <li>
          <a href="./pages/04-dynamic-at-startup">
            04 -With dynamically generated css at server start (Treeshaken)
          </a>
        </li>

        <li>
          <a href="./pages/05-tailwind">
            05 - Tailwind in Fresh via postcss
          </a>
        </li>
      </ul>
    </>
  );
}
