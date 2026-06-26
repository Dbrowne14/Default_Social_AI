# Phase 3 — Sanity CMS Architecture & Migration Plan

## Overview

### Goal

Replace the current static content architecture with a Sanity-powered content platform while preserving the completed Phase 2 front-end.

The migration should:

* Preserve the existing design and component architecture.
* Separate content from presentation.
* Keep React components largely CMS-agnostic.
* Introduce a content access layer between Sanity and the UI.
* Prepare the project for long-term editorial management.

---

# Architecture Principles

## 1. Content-first

Model editorial entities rather than UI components.

Examples:

* Service
* Insight
* Person
* Category

Not:

* Hero
* Card
* Section
* Grid

---

## 2. Fetch once

Every page should retrieve its content once at the page level.

```text
Page
    ↓
Content Access Layer
    ↓
Sanity
    ↓
View Model
    ↓
React Components
```

Child components should never query Sanity directly.

---

## 3. Components remain presentational

Components should receive data through props.

Avoid:

```ts
import { servicesDetails } from "@/data/ServicesDetails"
```

Instead:

```ts
const services = await getAllServices()

<ServicesBuckets services={services} />
```

---

## 4. View Models

React components should not depend directly on Sanity document structure.

Instead:

```text
Sanity Document
        ↓
normalize()
        ↓
View Model
        ↓
React Component
```

This keeps the UI independent of future CMS changes.

---

# Phase 1 — Content Audit

## Status

* [x] Static data audited
* [x] Page content audited
* [x] Component ownership identified
* [x] CMS ownership identified
* [x] Code-controlled components identified

---

# Content Model

## Documents

### homePage

Contains:

* Hero copy
* Value proposition
* Home section introductions
* CTA copy
* Home marketing content

---

### aboutPage

Contains:

* Header
* Company facts
* Group structure
* Values
* Approach
* Team section introduction

---

### servicesPage

Contains:

* Page introduction
* Supporting copy
* Section headings
* CTA copy

---

### insightsPage

Contains:

* Page introduction
* Featured section copy
* Library section copy

---

### service

Contains:

* Title
* Slug
* Link name
* Category
* Description
* Blurb
* Tags
* Offers
* AI callout
* Process steps
* Featured flag
* SEO

---

### insight

Contains:

* Title
* Slug
* Subject
* Excerpt
* Introduction
* Pull quotes
* Sections
* Categories
* Tags
* Related insights
* Featured flag
* Author
* Cover image
* SEO

---

### person

Replaces:

* Author
* Team member

A person may be:

* Author
* Team member
* Practice lead
* Key person

depending on fields.

---

### category

Contains:

* Name
* Slug
* Description

Used by:

* Services
* Insights
* Filtering

---

### siteSettings

Contains:

* Site name
* Default SEO
* Contact details
* Footer information
* Social links
* Global metadata

---

# Object Models

## Shared

* SEO
* CTA
* TitleLine
* ImageWithAlt
* Link

---

## About Page

* CompanyFact
* GroupEntry
* ApproachPrinciple

---

## Services

* ServiceOffer
* ProcessStep
* ServiceTag

---

## Insights

* PullQuote
* InsightSection
* InsightParagraph

---

# Portable Text Strategy

Portable Text will be used only where flexible editorial layouts are required.

## Uses Portable Text

* Home marketing copy
* About marketing copy

## Does NOT use Portable Text

* Services
* Process steps
* Offers
* Team
* Company facts
* Insight articles

Insight articles retain their structured editorial model.

---

# Type Structure

Current:

```text
types/
    index.ts
```

Target:

```text
types/
├── page.ts
├── service.ts
├── insight.ts
├── person.ts
├── category.ts
├── seo.ts
├── shared.ts
└── index.ts
```

---

# Content Access Layer

Create:

```text
lib/
└── content/
    pages.ts
    services.ts
    insights.ts
    persons.ts
    site.ts
```

Rules:

* Components never import `data/*`.
* Components never query Sanity.
* Routes fetch data.
* Routes pass props downward.

---

# Sanity Folder Structure

```text
sanity/
└── schemaTypes/
    ├── documents/
    │   homePage.ts
    │   aboutPage.ts
    │   servicesPage.ts
    │   insightsPage.ts
    │   service.ts
    │   insight.ts
    │   person.ts
    │   category.ts
    │   siteSettings.ts
    │
    └── objects/
        seo.ts
        cta.ts
        titleLine.ts
        imageWithAlt.ts
        companyFact.ts
        groupEntry.ts
        approachPrinciple.ts
        serviceOffer.ts
        processStep.ts
        pullQuote.ts
        insightSection.ts
```

---

# Migration Order

## Step 1

Build schemas.

---

## Step 2

Populate sample content.

---

## Step 3

Create content access layer.

---

## Step 4

Replace static imports with content functions.

---

## Step 5

Normalize CMS responses.

---

## Step 6

Connect page routes.

---

## Step 7

Connect article routes.

---

## Step 8

Replace placeholder images.

---

## Step 9

Add SEO.

---

## Step 10

Final QA.

---

# Guiding Principles

* Fetch once, pass down.
* Keep React components presentational.
* Keep content models independent from component hierarchy.
* Prefer reusable entities over duplicated content.
* Use objects for page-specific structures.
* Use documents only for standalone content with its own lifecycle.
* Preserve the existing design system and UI architecture throughout the migration.
