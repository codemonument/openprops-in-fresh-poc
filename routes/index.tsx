import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Openprops in Deno Fresh</title>
      </Head>
     <h1>OpenProps in Deno Fresh</h1>
     <a href="./with-postcss">With PostCSS</a>
    </>
  );
}
