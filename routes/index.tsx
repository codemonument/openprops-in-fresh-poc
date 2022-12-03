import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Openprops in Deno Fresh</title>
      </Head>
     <h1>OpenProps in Deno Fresh</h1>
     <ul>
      <li> <a href="./postcss-jit">With PostCSS JIT Mode</a> </li>
      <li> <a href="./postcss">With PostCSS Full Mode</a> </li>
      <li> <a href="./via-static">With Static OpenProps CSS Files </a> </li>
     </ul>
     
    
    </>
  );
}
