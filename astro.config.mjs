import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    tailwind(),
    preact(
      {
        compat: true,
      },
      {
        devtools: true,
      }
    ),
  ],
  adapter: vercel(),
});
