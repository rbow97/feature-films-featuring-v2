import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
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
  output: "hybrid",
  adapter: vercel(),
});
