# Goatveloper

Personal software engineering site for articles, project notes, resume material, and career learning in public.

## Stack

- Astro 6
- TypeScript
- Markdown and MDX
- Astro content collections
- Static RSS and sitemap output

Astro 6 requires Node 22.12.0 or newer. This repo includes `.nvmrc` with `22.12.0`.

## Commands

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Set `SITE_URL` before building for production if the final domain is not `https://goatveloper.dev`.

```sh
SITE_URL=https://your-domain.com npm run build
```

## Writing Articles

Articles live in `src/content/articles/` as Markdown or MDX files. Use Markdown by default and MDX only when a post needs custom components.

Each article uses frontmatter:

```md
---
title: "Understanding HTTP Caching"
description: "Notes from learning how browser and CDN caching work."
pubDate: 2026-04-22
updatedDate: 2026-04-22
tags: ["web", "http", "backend"]
featured: false
draft: false
---
```

Use `draft: true` for work in progress. Drafts are visible in development and hidden from production builds.

## Projects

Project case studies live in `src/content/projects/`. Keep them short and focused on problem, decisions, tradeoffs, and what was learned.

## Resume

The resume page is generated from `src/data/resume.ts`. Add structured experience, education, links, and skills there as the profile gets more concrete.

The resume download button expects the PDF at:

```text
public/resume/agustin-vignolo-sotelo-resume.pdf
```

Set `pdfAvailable: true` in `src/data/resume.ts` after the real Harvard-style PDF is in place.

## Design Direction

Visual and editorial design rules live in `DESIGN.md`. Use it before adding new page types, components, or major style changes.
