---
title: "Sistaller"
description: "Multi-tenant SaaS for automotive workshops: customers, vehicles, work orders, parts, service history, and cash management, built on a Rails API and a React frontend."
started: 2026-07-01
status: "active"
tech: ["Ruby on Rails", "React", "TypeScript", "PostgreSQL", "Ant Design", "TanStack Query", "RSpec", "Playwright", "Railway"]
featured: true
draft: false
demoUrl: "https://sistaller.com"
caseStudySlug: "2026-08-11-sistema-taller-rebuilding-product-architecture-with-security-boundaries"
---

## Problem

Small automotive workshops still run on paper, spreadsheets, and memory. Work orders get lost, vehicle history lives in someone's head, and nobody knows exactly what a customer still owes.

Sistaller is the product I am building to fix that: one place to run the daily operation of a workshop, with enough traceability to trust the numbers.

## Approach

The second version rebuilds the product around clear security and domain boundaries:

- **Rails 8.1 API** with PostgreSQL and the Solid Queue / Cache / Cable stack
- **Tenant isolation** with `acts_as_tenant` on every domain model, an organization header validated against memberships, and Pundit policies on every action
- **Service objects** that run inside a transaction, return explicit results, and record an audit event on every write
- **Money as integer cents** through value objects, plus idempotency keys on payments so a double click never charges twice
- **React 19 frontend** with Ant Design and TanStack Query, with organization-scoped query keys so cached data never leaks between tenants

The domain covers two areas: the workshop itself (customers, vehicles, work orders with parts and charges, service history) and cash management (collections, obligations, payments, and recurring obligations).

## Quality

- CI runs RuboCop, bundler-audit, Brakeman with warnings treated as errors, and RSpec on every change
- Frontend checks with oxlint, Vitest, and Playwright end-to-end flows
- Architecture decisions are recorded as ADRs, so the reasoning survives longer than the conversation that produced it
- Personal data handling is designed around Uruguay's data protection law (Ley 18.331)

## What I Learned

- Multi-tenancy is a property of every layer, not a column you add at the end
- Auditing and idempotency are much cheaper to design in than to bolt on later
- Writing decisions down makes it possible to move fast without re-litigating the same trade-offs

## Current Status

Live at [sistaller.com](https://sistaller.com) and under active development, currently working on the home dashboard and operational metrics.
