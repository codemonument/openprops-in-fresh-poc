import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App With Postcss</title>
        <link rel="stylesheet" href="/postcss/dynamic-generated-openprops.css">
        </link>
        <link rel="stylesheet" href="/02-postcss-route.css"></link>
      </Head>
      <div>
        <h1>With PostCSS Route (not Treeshaken)</h1>
        <a href="/">Back</a>

        <ol>
          <li>CSS file is placed in /static</li>
          <li>
            A request to /postcss/mystyles.css loads the css file from /static
            and transforms it via postcss with openprops
          </li>
        </ol>
      </div>
    </>
  );
}
