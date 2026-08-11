---
title: "OpenCode Workbench"
description: "An installable workflow kit for OpenCode repositories that standardizes agents, specs, context, and safety-first team workflows." 
started: 2026-01-26
status: "active"
tech: ["Node.js", "TypeScript", "CLI", "OpenCode", "Developer Tooling"]
featured: false
draft: false
repoUrl: "https://www.npmjs.com/package/@saikus08/opencode-workbench"
caseStudySlug: "2026-08-11-opencode-workbench-making-ai-assisted-development-reviewable"
---

## Problem

AI-assisted coding workflows become messy quickly when every repo, teammate, and local environment behaves differently.

I wanted a way to make those workflows more repeatable, reviewable, and safer by default.

## Approach

OpenCode Workbench is an installable kit for Node/TypeScript repositories using OpenCode. It bootstraps a shared repo structure around:

- project context and agent commands
- OpenSpec conventions for change proposals and living specs
- reusable agent skills
- workflow guardrails and safety defaults
- lightweight repo audit and doctor commands

## Why It Matters

This project is less about UI and more about workflow design. It forced me to think clearly about what good developer tooling should optimize for:

- portability across repos
- low-friction adoption
- explicit standards in versioned files
- safe defaults for AI-assisted development

## What I Learned

- how to turn workflow opinions into a small, installable CLI product
- how to structure templates and repo bootstrapping without making the tool invasive
- how much value comes from boring, predictable setup in team environments

## Current Status

The package is published publicly and continues to evolve as I refine how I want OpenCode-based workflows to behave across different projects.
