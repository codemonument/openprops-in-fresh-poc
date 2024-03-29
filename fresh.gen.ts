// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/index.tsx";
import * as $1 from "./routes/npm/[...path].ts";
import * as $2 from "./routes/pages/01-static.tsx";
import * as $3 from "./routes/pages/02-postcss-route.tsx";
import * as $4 from "./routes/pages/03-postcss-jit-route.tsx";
import * as $5 from "./routes/pages/04-dynamic-at-startup.tsx";
import * as $6 from "./routes/postcss-jit/[...path].ts";
import * as $7 from "./routes/postcss/[...path].ts";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/index.tsx": $0,
    "./routes/npm/[...path].ts": $1,
    "./routes/pages/01-static.tsx": $2,
    "./routes/pages/02-postcss-route.tsx": $3,
    "./routes/pages/03-postcss-jit-route.tsx": $4,
    "./routes/pages/04-dynamic-at-startup.tsx": $5,
    "./routes/postcss-jit/[...path].ts": $6,
    "./routes/postcss/[...path].ts": $7,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
