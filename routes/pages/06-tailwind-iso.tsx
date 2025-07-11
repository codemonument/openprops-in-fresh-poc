import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind in Fresh</title>
        <link rel="stylesheet" href="/tailwind-iso/css">
        </link>
      </Head>
      <div class="p-4">
        <h1 class="text-2xl font-bold text-green-500">
          Tailwind in Fresh via tailwind-iso
        </h1>
        <a
          class="text-green-500 hover:text-green-600 hover:cursor-pointer"
          href="/"
        >
          Back
        </a>

        <ol class="">
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
