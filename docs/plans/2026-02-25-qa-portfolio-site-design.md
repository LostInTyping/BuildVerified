# QA Portfolio Site — Design Document

**Author:** Ben Armour
**Date:** 2026-02-25
**Status:** Approved

---

## Overview

A personal portfolio site for Ben Armour, a Software QA Engineer with experience across test automation, UAT, defect lifecycle management, and lab infrastructure. The site positions Ben for both automation and manual QA roles by showcasing real (NDA-sanitized) case studies and a clear proof-of-capability structure.

The visual aesthetic is inspired by the Berrie Framer template: dark, grid-based, polished, and modern — but built as a coded Next.js site for full control.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, static generation)
- **Styling:** Tailwind CSS (custom dark theme)
- **Content:** MDX files with frontmatter (case studies + project history)
- **Deployment:** Vercel
- **Animations:** Framer Motion (subtle, optional)

---

## Site Architecture

| Route | Purpose |
|---|---|
| `/` | Home — hero, proof cards, featured case studies, capabilities summary |
| `/about` | About — career narrative, education, personal story |
| `/capabilities` | How I work — organized skill categories with descriptions |
| `/case-studies` | Case study list — grid of 2-3 deep-dive cards |
| `/case-studies/[slug]` | Case study detail — full NDA-safe breakdown |
| `/projects` | Project history — lighter timeline/grid of all engagements |
| `/contact` | Contact form + links |

---

## Visual Design

### Theme
- **Background:** Near-black (`#0a0a0a`) with dark gray cards (`#141414`–`#1a1a1a`)
- **Typography:** Clean sans-serif (Inter or Geist). Large bold headings, lighter body text.
- **Accent color:** Muted blue or warm neutral for links/highlights
- **Borders:** Thin subtle dividers (`border-white/10`)
- **Hover states:** Subtle lift or glow on cards, smooth transitions
- **Whitespace:** Generous padding and spacing

### Home Page Layout (top to bottom)
1. **Hero** — Headline: "Software QA Engineer", subheadline about building automation and validating releases, subtle CTA
2. **Proof section** — 3-5 horizontal cards (CI pipelines, flake control, UAT exit criteria, environment parity, defect lifecycle ownership)
3. **Featured case studies** — 2-3 cards from case studies grid (client type + scope + outcome)
4. **Capabilities summary** — Brief section linking to `/capabilities`
5. **CTA** — "Let's talk" linking to contact

### Case Study Card (in grids)
- Client type label (top)
- What you owned (middle, bold)
- Outcome (bottom, muted)
- Hover: subtle border glow or card lift

---

## Content Structure

### Case Study MDX Frontmatter
```yaml
---
title: "Retail Signage Platform"
slug: "retail-signage-platform"
clientType: "National retail signage company"
role: "QA Lead — Automation + UAT"
stack: ["Cypress", "TypeScript", "GitHub Actions", "Postman"]
highlights: "Built Cypress framework from scratch, established CI pipeline"
outcome: "Cut regression from days to hours"
featured: true
order: 1
---
```

### Case Study Body Structure (MDX)
- **Overview** (2-3 lines): what the system is, who uses it
- **My Role** (4-6 bullets): only what you personally did
- **Constraints** (1-3 bullets): NDA, multi-env, hardware matrix, release cadence
- **What I Delivered** (bullets): framework pieces, CI, reporting, data strategy
- **Impact** (bullets): measurable if allowed, otherwise directional
- **Tools** (chips): rendered from frontmatter `stack`
- **NDA note** (footer): "Details sanitized, workflows and outcomes are accurate."

### Project History MDX Frontmatter
```yaml
---
title: "STRATACACHE - Content Management Platform"
company: "Stratacache"
period: "2024-2026"
type: "professional"
role: "Intermediate QA Analyst"
summary: "Led test planning and automation for digital menu board systems"
stack: ["Cypress", "Jira", "Postman", "Confluence"]
order: 1
---
```

Project history entries are lighter — rendered in a timeline or compact grid, not full detail pages.

---

## Capabilities Page

Six focused categories (trimmed of low-value/generic items):

| Category | Contents |
|---|---|
| **Test Automation** | Cypress, TypeScript, reusable test utilities, visual regression |
| **Testing Strategy** | Test planning, regression, UAT, release validation, performance |
| **Defect Lifecycle** | Triage, repro isolation, tracking, verification through release |
| **Environments & Infrastructure** | Lab setup, device matrices, production-like environments, cross-platform |
| **CI & Tooling** | Git, GitHub, CI workflows, Postman |
| **Collaboration & Documentation** | Jira, Confluence, test plans, stakeholder communication |

Each category renders as a card or section with a brief description of how Ben applies these skills — not just a tool list.

---

## Positioning

**Headline:** Software QA Engineer

**Subheadline:** I build test automation, validate software across distributed environments, and own quality from test planning through release.

This positions Ben for both automation and manual QA roles without closing doors.

---

## Case Studies (from resume)

### Deep case studies (2-3):
1. **STRATACACHE** — Digital menu board systems. Test planning, lab infrastructure, Cypress automation, defect lifecycle, multi-client programs. (May 2024 - Feb 2026)
2. **UC IT Solutions Center** — Cypress test suites, regression coverage, test planning, cross-functional collaboration. (Aug 2022 - May 2024)
3. **Personal project(s)** — TBD, details to be provided later

### Project history entries:
- STRATACACHE (professional)
- UC IT Solutions Center (professional)
- Personal projects (to be added)

---

## Implementation Phases

Each phase gets its own implementation plan. We iterate on each before moving to the next.

1. **Foundation** — Next.js project setup, Tailwind config, dark theme, layout shell, navigation
2. **Home page** — Hero, proof section, featured case studies grid, capabilities summary
3. **Case studies system** — MDX content pipeline, list page, detail page template
4. **About + Capabilities pages** — Career narrative, skills categories, "how I work" content
5. **Project history** — Timeline/grid of all engagements with company labels
6. **Contact page** — Form, links, CTA
7. **Polish** — Animations, responsive fine-tuning, SEO meta, OG images, final QA
