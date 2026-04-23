import type { CollectionEntry } from "astro:content";

export type ArticleEntry = CollectionEntry<"articles">;
export type ProjectEntry = CollectionEntry<"projects">;

export function isPublishedEntry<T extends { data: { draft?: boolean } }>(
  entry: T,
) {
  return import.meta.env.DEV || entry.data.draft !== true;
}

export function sortByNewest<T extends { data: { pubDate: Date } }>(
  entries: T[],
) {
  return [...entries].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function sortProjectsByNewest<
  T extends { data: { started: Date; featured?: boolean } },
>(entries: T[]) {
  return [...entries].sort((a, b) => {
    if (a.data.featured !== b.data.featured) {
      return a.data.featured ? -1 : 1;
    }

    return b.data.started.valueOf() - a.data.started.valueOf();
  });
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
    year: "numeric",
  }).format(date);
}

export function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllTags(articles: ArticleEntry[]) {
  const tags = new Map<string, string>();

  for (const article of articles) {
    for (const tag of article.data.tags) {
      tags.set(slugifyTag(tag), tag);
    }
  }

  return [...tags.entries()]
    .map(([slug, label]) => ({ slug, label }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function getReadingStats(content: string) {
  const cleaned = content
    .replace(/^import\s.+$/gm, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]+\}/g, " ");

  const words = cleaned.match(/\b[\p{L}\p{N}'-]+\b/gu) ?? [];
  const wordCount = words.length;
  const minutes = Math.max(1, Math.round(wordCount / 220));

  return {
    minutes,
    wordCount,
  };
}
