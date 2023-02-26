import { Head } from "$fresh/runtime.ts";
import Counter from "../../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App With Postcss</title>
        <link rel="stylesheet" href="/postcss-jit/03-postcss-jit-route.css">
        </link>
      </Head>
      <div>
        <h1>With PostCSS JIT Route (Treeshaken)</h1>
        <a href="/">Back</a>

        <ol>
          <li>CSS file is placed in /static</li>
          <li>
            A request to /postcss-jit/mystyles.css loads the css file from
            /static and transforms it via postcss with openprops
          </li>
        </ol>
      </div>
    </>
  );
}
