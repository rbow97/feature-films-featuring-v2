import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

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
});
