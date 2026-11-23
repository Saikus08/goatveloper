---
title: "Goatveloper"
description: "A personal software engineering site for articles, project case studies, and resume material."
started: 2026-04-22
status: "active"
tech: ["Astro", "TypeScript", "Markdown", "Content Collections"]
featured: false
draft: false
---

## Problem

I wanted one place to publish what I learn as a software engineer while also building a stronger public profile.

The site needs to support writing first, but it also needs enough structure for projects, resume material, and future growth.

## Approach

The first version uses Astro as a static content site. Articles and projects are written in the repo as Markdown or MDX files, then loaded through typed content collections.

This keeps the publishing workflow simple and durable:

- write in the repo
- validate metadata with schemas
- generate pages at build time
- publish through Git-based deployment

## Tradeoffs

Using repo-based content means there is no admin dashboard at the start. That is intentional. A CMS can come later if the publishing workflow needs collaborators, scheduling, or non-technical editing.

The upside is that content stays portable, versioned, and easy to review.

## Next Steps

- Add real resume details.
- Add the first serious technical article.
- Add project case studies as work becomes worth showing.
- Configure the production domain before launch.
