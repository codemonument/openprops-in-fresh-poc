import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Openprops in Fresh</title>
        <link rel="stylesheet" href="/04-dynamic-at-startup.css">
        </link>
      </Head>
      <div>
        <h1>With dynamically generated css at server start (Treeshaken)</h1>
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
