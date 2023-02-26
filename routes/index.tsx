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
      </ul>
    </>
  );
}
