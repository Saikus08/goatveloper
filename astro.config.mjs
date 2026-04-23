import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://goatveloper.dev";

export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
