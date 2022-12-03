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
        <link rel="stylesheet" href="/open-props/open-props.min.css"></link>
        <link rel="stylesheet" href="/open-props/normalize.min.css"></link>
        <link rel="stylesheet" href="/open-props/buttons.min.css"></link>
        <link rel="stylesheet" href="/via-static.css"></link>
      </Head>
      <div>
        <h1>With Static OpenProps CSS Files </h1>
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
