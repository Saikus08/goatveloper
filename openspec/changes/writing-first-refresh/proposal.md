# Writing-First Refresh

## Why

Goatveloper already has a solid content and page structure, but the current visual system does not yet fully communicate a distinctive, senior-engineer personal brand.

The main problems in the current experience are:

- the homepage feels closer to a good template than an authored publication
- the homepage hero has a broken supporting-points layout
- the mobile navigation wraps awkwardly and weakens first impression
- light mode feels less polished than dark mode
- the strongest visual tone currently lives on article pages, not across the full site

The chosen direction is:

- writing-first
- minimal, modern, professional
- authored rather than generic
- subtle motion only
- hamburger navigation on mobile

## What Changes

This change will redesign the visual system around a writing-first personal engineering publication.

Planned updates:

1. Redesign the homepage hero and supporting sections so the site feels more authored, editorial, and personal.
2. Introduce a mobile hamburger navigation that keeps desktop navigation compact and clean.
3. Fix the broken homepage list/layout issues and tighten responsive behavior.
4. Refine typography, spacing, surfaces, and hierarchy so light and dark themes feel equally polished.
5. Align the homepage, listing pages, and resume/profile pages more closely with the stronger editorial tone already present in article detail pages.
6. Add restrained interaction polish, such as subtle nav, button, and card transitions, without making the site flashy.

## Scope

In scope:

- header and navigation behavior
- homepage layout and section presentation
- shared visual styling in `src/styles/global.css`
- related component updates needed for consistent styling
- responsive refinements for mobile and tablet
- subtle motion and interaction polish

Out of scope for this change:

- replacing PNG logos with final SVG brand assets
- major content rewrites
- new content types or CMS changes
- heavy animation systems or decorative motion

## Expected Result

After this change, Goatveloper should feel like a polished personal engineering publication: clear authorship, stronger writing-first hierarchy, better mobile navigation, cleaner responsive behavior, and a more premium but restrained visual system.

## Risks

- over-styling the site and drifting away from the calm technical tone in `DESIGN.md`
- making the homepage more visual at the expense of scanability
- introducing mobile navigation complexity that is not accessible or maintainable

## Mitigations

- keep article readability as the main quality bar
- prefer small, reviewable CSS and component changes
- keep motion optional, subtle, and respectful of readability
- preserve semantic HTML, keyboard support, and visible focus states
