import { Head } from "$fresh/runtime.ts";
import Counter from "../../islands/Counter.tsx";

/**
 * Good: Postcss-Jit Mode works as expected! Only the OpenProps get added, that are used in /static/postcss-jit.css. 
 * 
 * Bad: Normalize CSS not available, bc. it is not part of the main OpenProps object and it would not be used anyways, 
 * so the additional css rules would not be loaded. 
 * @returns 
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App With Postcss</title>
        <link rel="stylesheet" href="/postcss-jit/postcss-jit.css"></link>
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
