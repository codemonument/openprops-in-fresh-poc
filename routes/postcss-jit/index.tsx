import { Head } from "$fresh/runtime.ts";
import Counter from "../../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App With Postcss</title>
        <link rel="stylesheet" href="/postcss-jit/global.css"></link>
      </Head>
      <div>
        <h1>With PostCSS JIT Mode</h1>
        <a href="/">Back</a>
       
        <p>
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
