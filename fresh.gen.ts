// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/index.tsx";
import * as $1 from "./routes/npm/[...path].ts";
import * as $2 from "./routes/postcss-jit/[...path].ts";
import * as $3 from "./routes/postcss-jit/index.tsx";
import * as $4 from "./routes/postcss/[...path].ts";
import * as $5 from "./routes/postcss/index.tsx";
import * as $6 from "./routes/via-static/index.tsx";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/index.tsx": $0,
    "./routes/npm/[...path].ts": $1,
    "./routes/postcss-jit/[...path].ts": $2,
    "./routes/postcss-jit/index.tsx": $3,
    "./routes/postcss/[...path].ts": $4,
    "./routes/postcss/index.tsx": $5,
    "./routes/via-static/index.tsx": $6,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
