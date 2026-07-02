# Phase 3 — Sanity CMS Migration Plan

## Objective

Replace the existing static content source with Sanity while preserving the current application architecture.

The migration should be **incremental**, allowing the website to remain functional throughout the process.

The goal is **not** to redesign the application, but to replace where content comes from.

---

# Guiding Principles

## Preserve the existing architecture

Current architecture:

```text
data/
        ↓
lib/content/
        ↓
app/
        ↓
components/
```

Target architecture:

```text
Sanity
        ↓
lib/content/
        ↓
app/
        ↓
components/
```

Only the **content source** should change.

---

## Keep components CMS-agnostic

Components should never know whether content comes from:

* static TypeScript
* Sanity
* another CMS
* an API

Components should continue to receive typed props exactly as they do today.

---

## Keep the content layer as the abstraction

`lib/content/` remains responsible for:

* retrieving content
* shaping content
* exposing a stable API to pages

Pages should continue calling functions such as:

```ts
getHomePage()
getAboutPage()
getAllServices()
getAllPeople()
getAllInsights()
getSiteSettings()
```

Internally these functions will gradually change from reading static data to querying Sanity.

---

# Migration Stages

## Stage 1 — Install and configure Sanity

Create the Sanity Studio within the existing project.

Tasks:

* Install Sanity packages
* Configure the Studio
* Configure project ID and dataset
* Verify the Studio runs locally
* Commit the initial setup

No application code should change during this stage.

---

## Stage 2 — Build the schema

Create schemas that mirror the existing TypeScript models.

### Documents

* siteSettings
* homePage
* aboutPage
* servicesPage
* insightsPage
* service
* person
* insight

### Shared objects

Where appropriate, create reusable object schemas matching the existing shared types.

Examples:

* titleLine
* titleSegment
* sectionIntro
* pageCTA
* linkItem

The aim is to reuse the current data model rather than redesign it.

---

## Stage 3 — Connect Sanity

Create a dedicated Sanity implementation layer.

Suggested structure:

```text
lib/
    content/
    sanity/
        client.ts
        fetch.ts
        image.ts
        queries.ts
```

Responsibilities:

* `client.ts` – Sanity client configuration
* `queries.ts` – GROQ queries
* `fetch.ts` – reusable fetch helper
* `image.ts` – image URL helper

The existing `lib/content` layer should remain unchanged from the perspective of the rest of the application.

---

## Stage 4 — Migrate one collection

Begin with **Services**.

Replace the implementation of:

```ts
getAllServices()
```

Before:

```ts
return services
```

After:

```ts
const services = await client.fetch(...)
return mapServices(services)
```

The return type should remain identical.

No components should require modification.

Once this is working, commit the migration before proceeding.

---

## Stage 5 — Migrate remaining collections

Migrate independent collections one at a time.

Recommended order:

1. People
2. Insights
3. Site Settings

After each migration:

* verify the UI
* verify TypeScript
* commit

Working incrementally makes issues easier to isolate.

---

## Stage 6 — Migrate page documents

Finally migrate:

* Home Page
* About Page
* Services Page
* Insights Page

These documents primarily contain:

* headers
* editorial copy
* CTAs
* section introductions

Because the components already receive structured props, these migrations should mostly involve replacing the content source.

---

## Stage 7 — Remove static data

Once every content source has been migrated:

* remove unused files from `data/`
* remove obsolete imports
* tidy types if required
* perform a final regression test

Only remove static content after confirming every page is successfully driven by Sanity.

---

# Development Workflow

For each migration:

1. Create the schema.
2. Add example content in Sanity.
3. Write the GROQ query.
4. Update the relevant `lib/content` function.
5. Keep the returned TypeScript shape unchanged.
6. Verify the page renders correctly.
7. Commit before moving to the next content source.

---

# Architectural Rules

These should remain true throughout the migration.

* Components never query Sanity.
* Components never import from `data/`.
* Pages never query Sanity directly.
* `lib/content` remains the application's content API.
* `lib/sanity` contains all CMS-specific implementation.
* Components continue receiving the same props before and after migration.

---

# End Goal

When the migration is complete:

```text
Sanity
        ↓
lib/content/
        ↓
app/
        ↓
components/
```

The application should behave exactly as it does today, with the only difference being that content is now managed through Sanity instead of static TypeScript files.

The success of this migration is measured by how little the pages and components need to change while the underlying content source is replaced.
