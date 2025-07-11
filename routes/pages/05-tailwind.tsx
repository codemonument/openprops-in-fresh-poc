import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind in Fresh</title>
        <link rel="stylesheet" href="/tailwind/tailwind.css">
        </link>
      </Head>
      <div>
        <h1>Tailwind in Fresh via postcss</h1>
        <a href="/">Back</a>

        <ol>
          <li>CSS files are placed in /css</li>
          <li>
            At server start, all *.css files in /css will be read and 'compiled'
            into /static
          </li>
          <li>
            Resulting CSS files can be loaded from /static with the same name as
            in /css
          </li>
        </ol>
      </div>
    </>
  );
}
