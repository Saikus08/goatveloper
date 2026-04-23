---
name: learn-while-building
description: Build and maintain an Obsidian-based personal software engineering brain from real project work. Use when Codex is helping build, debug, review, or backfill a software project and should capture stack/framework/library concepts, related concepts, project examples, bugs, patterns, decisions, docs references, or reinforcement prompts in the user's learn-while-building vault.
---

# Learn While Building

## Overview

Use this skill to keep a concept-first software engineering brain in Obsidian while working on real projects. The vault is:

`/Users/agustinvignolosotelo/Documents/Obsidian/learn-while-building/`

Concept notes are the source of truth. Bugs, patterns, decisions, and projects are supporting evidence that link back to concepts.

## First Step

Before creating or updating notes, inspect the vault shape and search for existing notes:

- Use `rg --files <vault>` and `rg` before creating a concept.
- Prefer updating existing notes over creating duplicates.
- If the vault is missing the expected structure, run `scripts/ensure_vault.py` from this skill or create the same folders/templates manually.
- For detailed structure and note conventions, read `references/vault-conventions.md`.

## Capture Levels

Classify each learning item before writing:

- `Mentioned`: add only as a `[[Related Concept]]` link.
- `Encountered`: create a seed concept note if the concept is important but not yet explored.
- `Used/Debugged/Decided`: create or update a full concept note and optionally add a real-world note.

Do not document every dependency, API, or implementation detail. Capture concepts that help the user understand the stack, framework, tool, or architecture they are actively using.

## Active Build Mode

Use during implementation, debugging, or review.

1. Notice concepts the user is actually touching, such as framework behavior, data flow, rendering, validation, auth, deployment, testing, caching, types, state, or persistence.
2. Search the vault for an existing concept note using exact and fuzzy names.
3. Update the existing concept when it repeats. Strengthen it with refined understanding, real examples, related concepts, or open questions.
4. Create a seed concept note only when the concept matters but the user has not gone deep yet.
5. Create bug, pattern, or decision notes only when there is a reusable lesson from the user's project.
6. Add low/medium confidence concepts to reinforcement.

At natural stopping points, summarize learning changes in a short "Learning captured" section.

## Project Backfill Mode

Use for already-started projects.

1. Inspect the repo structure, dependency files, config files, and app boundaries.
2. Identify the high-signal stack and framework concepts visible in code the user owns.
3. Create or update one project map under `03-projects/`.
4. Seed major concepts without pretending the vault is complete.
5. Add related concept links for the larger picture.
6. Suggest a short learning roadmap instead of producing a large documentation dump.

Backfill in passes. First create a project map and seed concepts; deepen concepts only when they are central or repeatedly encountered.

## Reinforcement Mode

Use when the user wants to revisit or deepen learning.

- Review low-confidence, repeated, or recently touched concepts.
- Ask the user to explain a concept before showing the note when useful.
- Generate review prompts from `04-reinforcement/review-queue.md`.
- Move concepts toward `status: solid` only after repeated use and clear explanation.

## Documentation Policy

When documenting framework, library, tool, or API behavior, use available documentation tools such as Context7/docs MCP when present. Prefer official sources.

- Do not copy large documentation blocks.
- Use docs to verify accuracy, names, constraints, and current behavior.
- Write the note in the user's project-specific understanding.
- Add compact source references under `## References`.
- If no docs MCP is available, proceed from repo context and clearly mark uncertain items as questions or low confidence.

## Writing Style

Keep notes practical and unfinished-friendly:

- Write concise explanations grounded in the user's project.
- Prefer "my current understanding" over tutorial prose.
- Add unresolved `[[Concept]]` links for related concepts the user should later understand.
- Use `status: seed`, `status: learning`, or `status: solid`.
- Use `confidence: low`, `medium`, or `high`.
- Avoid generic tutorials, copied docs, and large speculative taxonomies.

## Resources

- `references/vault-conventions.md`: vault folders, note schemas, duplicate handling, and maintenance rules.
- `assets/templates/`: reusable Markdown templates for concepts, bugs, patterns, decisions, projects, and reviews.
- `scripts/ensure_vault.py`: idempotently creates the vault folders, starter maps, and templates.
