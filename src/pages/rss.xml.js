import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../lib/site";

export async function GET(context) {
  const articles = (
    await getCollection("articles", ({ data }) => !data.draft)
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${site.name} Articles`,
    description: site.description,
    site: context.site ?? site.url,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/articles/${article.id}/`,
    })),
  });
}
