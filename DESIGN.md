# Design Direction

This document defines the visual and editorial direction for Goatveloper. It should guide new pages, components, articles, and future redesigns.

## Purpose

Goatveloper is a personal software engineering site. Its design should make the author look thoughtful, practical, and technically serious without feeling corporate or overproduced.

The site exists to support:

- writing about software engineering in public
- project case studies and technical decisions
- resume/profile material
- long-term career credibility

## Audience

Primary readers:

- engineers reviewing the author's thinking
- recruiters or hiring managers looking for signal
- future collaborators
- the author revisiting old lessons

The design should help readers quickly answer:

- What does this person care about?
- Can they explain technical ideas clearly?
- Do they make thoughtful engineering decisions?
- What have they built?

## Brand Feel

The visual tone should be:

- precise
- calm
- technical
- readable
- personal
- quietly confident

Avoid making the site feel like:

- a startup landing page
- a generic developer template
- a dark cyberpunk portfolio
- a flashy animation demo
- a social media profile page

## Visual Principles

### Content First

Writing is the main product. Layouts should make articles easy to scan, read, and revisit.

### Dense But Comfortable

The site can feel information-rich, but never cramped. Use hierarchy, spacing, and typography to make technical content digestible.

### Practical Personality

Personality should come from wording, structure, and small interface details, not decorative noise.

### Durable Over Trendy

Prefer simple layouts and restrained styling that will still look good after many posts and projects are added.

## Product Decisions

These are current design decisions, not open questions.

### Custom Icon

The site should have a custom icon/mark instead of relying permanently on the temporary `G` mark.

Requirements:

- work as a favicon, small header mark, and social preview detail
- feel personal but still technical
- avoid generic code brackets, terminal prompts, rockets, or stock developer symbols
- be simple enough to redraw as SVG later

Current implementation note:

- keep the raw user-provided export as source material in the repo
- use a cleaned extracted logo asset in the header and homepage until a proper vector mark is prepared
- do not force the wide logo into the favicon slot; keep a square fallback until a true favicon-ready mark exists

### Personal Homepage Signal

The homepage should clearly communicate that Agustin is the person behind the site.

Good options:

- a concise personal line in the hero
- a small authored focus panel
- a photo, silhouette, or custom icon system later
- links to writing, projects, and resume from the first viewport

The homepage should not feel anonymous or like a template blog.

### Article Enhancements

Articles should support:

- callout components for notes, warnings, questions, and decisions
- copy buttons for code examples
- readable code blocks on mobile
- table of contents for longer posts

Callouts should be useful, not decorative. They should help readers understand context, tradeoffs, or mistakes.

### Resume PDF

The resume page should link to a downloadable PDF resume based on the user's Harvard-style resume template.

The site itself should not be treated as the printable resume. The web page can summarize profile information, but the primary resume artifact should be the PDF download.

Expected location:

- `public/resume/agustin-vignolo-sotelo-resume.pdf`

### Theme Toggle

The site should have a manual light/dark mode toggle.

Rules:

- default to the user's system preference on first visit
- persist manual choice after the user changes it
- avoid layout shift when the icon changes
- keep both themes equally polished

## Layout Rules

- Use full-width page sections with constrained inner content.
- Keep the main content width around `1120px`.
- Keep article prose narrower, around `760px`.
- Use cards only for repeated items such as article cards, project cards, and small framed tools.
- Do not nest cards inside cards.
- Keep border radius at `8px` or less.
- Use stable dimensions for navigation, cards, buttons, and repeated UI elements.
- Prioritize mobile readability early, especially long titles and code blocks.

## Typography

Current direction:

- System sans-serif for the whole site.
- Strong, compact headings.
- Comfortable body line-height.
- Monospace only for code, file paths, commands, and technical labels.

Rules:

- Do not use negative letter spacing.
- Do not scale font size directly with viewport width.
- Keep article text calm and readable.
- Use bold text sparingly for real emphasis.

## Color System

Current palette:

- background: light blue-gray
- surface: white or near-black in dark mode
- text: near-black or near-white
- accent: teal
- warm secondary accent: muted amber
- borders: cool gray

Rules:

- Keep the palette restrained and technical.
- Do not let the site become a one-color theme.
- Avoid dominant purple, beige, brown/orange, or heavy dark-blue palettes.
- Use accent color for navigation states, links, tags, and primary actions.
- Use warm accent only as a secondary signal, not a main brand color.

## Components

### Header

The header should stay direct and useful:

- brand mark
- site name
- short role label
- primary navigation

Avoid adding slogans, social widgets, or extra controls unless they solve a real navigation problem.

### Home Hero

The hero should say what the site is immediately:

- software engineering in public
- articles
- project notes
- resume/profile

It should not become a marketing splash page.

### Article Cards

Article cards should show:

- date
- title
- description
- tags
- optional series

They should support scanning, not decoration.

### Project Cards

Project cards should show:

- title
- short problem/description
- status
- start date
- technology tags

Projects should read like case studies, not thumbnails.

### Tags

Tags are for navigation and topic clustering. Keep them small, readable, and consistent.

### Buttons

Buttons should be used for clear actions:

- read articles
- view resume
- open project
- visit repo

Do not use buttons as decoration.

## Article Design

Articles should support:

- readable prose
- clear headings
- code blocks
- table of contents on larger screens
- tags
- published and updated dates

Article pages should avoid:

- sidebars full of unrelated widgets
- excessive author bio repetition
- decorative banners that push content down
- ads or newsletter interruptions

## Content Tone

The writing voice should be:

- clear
- direct
- human
- specific
- honest about uncertainty

Prefer:

- "Here is what I misunderstood."
- "This tradeoff mattered because..."
- "The bug happened because..."
- "My current understanding is..."

Avoid:

- generic tutorial voice
- exaggerated confidence
- empty motivational language
- AI-sounding summaries
- vague claims like "scalable, robust, modern"

## Accessibility

Baseline requirements:

- semantic HTML
- visible focus states
- sufficient color contrast
- keyboard navigation
- skip link
- descriptive link text
- no text-overlap on mobile
- code blocks that can scroll horizontally

Any future interactive component should work without relying only on color.

## Motion

Motion should be rare and useful.

Good uses:

- subtle hover state
- small navigation feedback
- optional transition between views

Avoid:

- constant background movement
- decorative animation
- animation that makes articles harder to read

## Design Decisions To Revisit

Open questions that remain:

- What should the custom icon actually look like?
- Should the homepage use a photo, illustration, or purely typographic personal signal?
- Should callout components be plain Markdown/MDX components or generated from blockquote syntax?
- Should code copy buttons be framework-free JavaScript or an Astro/MDX component?
- Should the resume PDF be versioned in the repo or generated from a separate source file?
- Should the theme toggle use text, icon-only, or a segmented control?

## Inspiration Policy

Use inspiration to clarify taste, not to copy.

Good inspiration references:

- personal engineering blogs
- technical documentation sites
- project case-study pages
- clean resume/profile pages

When collecting inspiration, note:

- what feels strong
- what feels wrong for this site
- what specific layout/component/detail is useful

Do not copy another site's exact layout, palette, typography, or brand treatment.

### Real Example

If studying Lee Robinson's site, the useful inspiration is the clear personal intro, focused writing list, and direct profile positioning. The wrong move would be copying his exact layout, wording, typography, or minimalist treatment.

If studying Maggie Appleton's site, the useful inspiration is how the site feels authored, organized around different kinds of thinking, and comfortable with unfinished notes. The wrong move would be copying the garden metaphor, illustration style, or navigation structure.

## Taste Pass Result

Current taste direction:

- primary feel target: Josh W. Comeau
- liked references: Maggie Appleton, Brittany Chiang, Rauno Freiberg
- disliked references: Julia Evans, Simon Willison, Lee Robinson
- avoid direction: dense/plain archive blogs and overly minimal developer homepages

What this means for Goatveloper:

- Articles should feel polished, carefully designed, and pleasant to read.
- Technical writing can include useful UI details such as callouts, copy buttons, diagrams, and examples.
- The site should feel authored and personal, not like a neutral archive.
- The profile/resume/project side should feel polished and credible.
- Interactions should be precise and memorable, but not overdesigned.

What to avoid:

- plain link-dump archives
- dense chronological logs as the main homepage experience
- anonymous minimalism
- visual systems that feel too default, too sparse, or too utilitarian
- making the site look like documentation instead of a personal engineering publication

## Taste Pass Candidates

Use these sites to calibrate taste before a larger redesign.

### Lee Robinson

URL: https://leerob.com/

Study for:

- direct personal positioning
- clean writing archive
- strong "person behind the site" signal
- simple career credibility

Possible fit for Goatveloper:

- low after taste pass

Risk:

- too minimal, too anonymous, and too close to a common developer homepage pattern

### Julia Evans

URL: https://jvns.ca/

Study for:

- topic organization
- practical learning voice
- long-running archive structure
- beginner-friendly technical confidence

Possible fit for Goatveloper:

- low after taste pass

Risk:

- too plain and too archive-like for the desired direction

### Simon Willison

URL: https://simonwillison.net/

Study for:

- dense technical archive
- tags and notes as a knowledge system
- practical experiments and links
- showing work over time

Possible fit for Goatveloper:

- low after taste pass

Risk:

- too dense, too log/archive-first, and not personal enough for the desired first impression

### Maggie Appleton

URL: https://maggieappleton.com/

Study for:

- authored personality
- different content types
- digital garden thinking
- visual identity connected to writing

Possible fit for Goatveloper:

- high as a supporting reference

Risk:

- too illustrative or garden-like unless adapted carefully; borrow authored feeling, not the full metaphor

### Josh W. Comeau

URL: https://www.joshwcomeau.com/

Study for:

- interactive explanations
- article polish
- code-heavy teaching
- delightful but useful UI details

Possible fit for Goatveloper:

- highest as the main feel target

Risk:

- too whimsical if copied literally; borrow article polish and useful delight, not the entire playful surface

### Brittany Chiang

URL: https://britchiang.com/

Study for:

- polished engineer profile
- resume/project hierarchy
- accessible, design-minded presentation
- clear "work + projects + writing" structure

Possible fit for Goatveloper:

- high as a supporting reference for profile, resume, and project credibility

Risk:

- portfolio-first structure could overpower the writing-first goal

### Rauno Freiberg

URL: https://rauno.me/

Study for:

- precise interaction design
- personal design principles
- strong custom identity
- restraint with memorable details

Possible fit for Goatveloper:

- high as a supporting reference for restraint, interaction detail, and custom identity

Risk:

- too design-engineering focused for a writing-first software engineer site
