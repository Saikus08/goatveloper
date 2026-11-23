# Goatveloper

Personal site of Agustín Vignolo, backend and data engineer: resume, project case studies, and engineering notes.

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

## Writing

Articles live in `src/content/articles/` as Markdown or MDX files. Use Markdown by default and MDX only when a post needs custom components.

Each article uses frontmatter:

```md
---
title: "Understanding HTTP Caching"
description: "Notes from learning how browser and CDN caching work."
pubDate: 2026-04-22
updatedDate: 2026-04-22
tags: ["web", "http", "backend"]
series: "Engineering Notes"
featured: false
draft: false
---
```

- `series: "Engineering Notes"` shows the post on the Writing page and the homepage.
- `series: "Project Case Studies"` hides it from the Writing index. Link it from a project with `caseStudySlug` instead.
- `featured: true` pins the post on the homepage and the Writing page.
- `draft: true` keeps it visible in development and hidden from production builds.

## Projects

Project case studies live in `src/content/projects/`. Keep them short and focused on problem, decisions, tradeoffs, and what was learned. Set `featured: true` on the project that should lead the Projects page.

## Resume and contact

The resume page is generated from `src/data/resume.ts`. Its source of truth is the resume in `~/career/resume`: keep titles, dates and numbers in sync with that file.

The site serves the phone-free version of the PDF. After rebuilding the resume there, regenerate `agustin-vignolo-resume-no-phone.pdf` and copy it over:

```sh
cp ~/career/resume/out/agustin-vignolo-resume-no-phone.pdf public/resume/agustin-vignolo-resume.pdf
```

Contact links (email, LinkedIn, GitHub) live in `src/lib/site.ts` and are used by the homepage, About, Resume and footer.

## Design Direction

Visual and editorial design rules live in `DESIGN.md`. Use it before adding new page types, components, or major style changes.
