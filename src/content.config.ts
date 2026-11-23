import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const thumbnailSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

const articles = defineCollection({
  loader: glob({
    base: "./src/content/articles",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    thumbnail: thumbnailSchema.optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    started: z.coerce.date(),
    status: z.enum(["active", "paused", "complete"]).default("active"),
    tech: z.array(z.string()).default([]),
    thumbnail: thumbnailSchema.optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    repoUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    caseStudySlug: z.string().optional(),
  }),
});

export const collections = { articles, projects };
