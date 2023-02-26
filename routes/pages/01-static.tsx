import { Head } from "$fresh/runtime.ts";
import Counter from "../../islands/Counter.tsx";

/**
 * Show the usage of openprops via static links to the /static directory
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App With Postcss</title>
        <link rel="stylesheet" href="/open-props/open-props.min.css"></link>
        <link rel="stylesheet" href="/open-props/normalize.min.css"></link>
        <link rel="stylesheet" href="/open-props/buttons.min.css"></link>
        <link rel="stylesheet" href="/01-static.css"></link>
      </Head>
      <div>
        <h1>With Static OpenProps CSS Files</h1>
        <a href="/">Back</a>

        <p>
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
