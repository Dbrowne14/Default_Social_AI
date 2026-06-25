# Phase 3 – Sanity CMS Migration Checklist

## Goal

Migrate the Default Social website from static front-end content to a Sanity-powered CMS, while preserving the completed Phase 2 design and preparing the site for deployment and launch.

---

# 1. Content Model Plan

## Objective

Define content around editorial entities, not current UI sections.

## Checklist

* [ ] Audit current static content files
* [ ] List all content currently hardcoded in components
* [ ] Identify reusable content entities
* [ ] Separate page content from global site content
* [ ] Separate editorial content from layout-specific content
* [ ] Avoid modelling schemas directly around current component names

## Core document types

* [ ] `page`
* [ ] `service`
* [ ] `insight`
* [ ] `author`
* [ ] `category`
* [ ] `teamMember`
* [ ] `siteSettings`
* [ ] `navigationItem`

## Core object types

* [ ] `seo`
* [ ] `cta`
* [ ] `imageWithAlt`
* [ ] `portableTextBlock`
* [ ] `stat`
* [ ] `link`
* [ ] `titleLine`

## Key decisions

* [ ] Which pages are fully CMS-managed?
* [ ] Which sections remain static?
* [ ] Which fields need editorial control?
* [ ] Which fields are required?
* [ ] Which fields need validation?
* [ ] Which content should be reusable across pages?

---

# 2. Type Model Cleanup

## Objective

Make TypeScript types match the future CMS structure.

## Checklist

* [ ] Review current global `types/index.ts`
* [ ] Identify mixed-domain types
* [ ] Split types by domain over time

## Suggested type files

* [ ] `types/page.ts`
* [ ] `types/service.ts`
* [ ] `types/insight.ts`
* [ ] `types/author.ts`
* [ ] `types/category.ts`
* [ ] `types/team.ts`
* [ ] `types/seo.ts`
* [ ] `types/shared.ts`

## Article types

* [ ] Create separate `InsightSummary` type
* [ ] Create separate `InsightDetail` type
* [ ] Remove broad optional article props where possible
* [ ] Ensure full article pages require full article data
* [ ] Ensure listing cards only receive summary data

## Shared types

* [ ] Define reusable `Slug`
* [ ] Define reusable `ImageWithAlt`
* [ ] Define reusable `SEO`
* [ ] Define reusable `CTA`
* [ ] Define reusable `TitleLine`
* [ ] Define reusable `PortableTextContent`

---

# 3. Content Access Layer

## Objective

Stop importing static data directly into routes/components.

## Checklist

* [ ] Create a `lib/content/` folder
* [ ] Add content access functions
* [ ] Route all page-level data through content functions
* [ ] Keep components focused on rendering
* [ ] Keep client components focused on interaction
* [ ] Prepare function names for future Sanity queries

## Suggested files

* [ ] `lib/content/getPages.ts`
* [ ] `lib/content/getServices.ts`
* [ ] `lib/content/getInsights.ts`
* [ ] `lib/content/getAuthors.ts`
* [ ] `lib/content/getTeam.ts`
* [ ] `lib/content/getSiteSettings.ts`
* [ ] `lib/content/normalize.ts`

## Required functions

* [ ] `getHomePage()`
* [ ] `getAboutPage()`
* [ ] `getServicesPage()`
* [ ] `getInsightsPage()`
* [ ] `getAllServices()`
* [ ] `getAllInsights()`
* [ ] `getFeaturedInsight()`
* [ ] `getInsightBySlug(slug)`
* [ ] `getRelatedInsights(currentSlug, category)`
* [ ] `getSiteSettings()`

## Migration rule

* [ ] Components should not directly import from `data/`
* [ ] Routes should call content functions
* [ ] Content functions can temporarily return static data
* [ ] Later, content functions will switch from static data to Sanity queries

---

# 4. Sanity Schema Implementation

## Objective

Build Sanity schemas that support long-term editorial use.

## Checklist

* [ ] Set up Sanity project
* [ ] Configure Sanity Studio
* [ ] Create schema folder structure
* [ ] Create document schemas
* [ ] Create object schemas
* [ ] Add validation rules
* [ ] Add preview configuration
* [ ] Add field descriptions for editors

## Suggested structure

```txt
sanity/
  schemaTypes/
    documents/
      page.ts
      service.ts
      insight.ts
      author.ts
      category.ts
      teamMember.ts
      siteSettings.ts
    objects/
      seo.ts
      cta.ts
      imageWithAlt.ts
      portableTextBlock.ts
      stat.ts
      link.ts
      titleLine.ts
```

## Document schemas

### `service`

* [ ] Title
* [ ] Slug
* [ ] Link name
* [ ] Category
* [ ] Short description
* [ ] Full description
* [ ] Offers
* [ ] Process steps
* [ ] AI callout
* [ ] Tags
* [ ] SEO

### `insight`

* [ ] Title
* [ ] Slug
* [ ] Excerpt
* [ ] Author reference
* [ ] Category reference
* [ ] Tags
* [ ] Published date
* [ ] Read time
* [ ] Featured flag
* [ ] Cover image
* [ ] Image caption
* [ ] Body content
* [ ] Related article picks
* [ ] SEO

### `author`

* [ ] Name
* [ ] Role
* [ ] Initials
* [ ] Bio
* [ ] Image
* [ ] Social links

### `category`

* [ ] Title
* [ ] Slug
* [ ] Description
* [ ] Style intent

### `teamMember`

* [ ] Name
* [ ] Role
* [ ] Bio
* [ ] Initials
* [ ] Image
* [ ] Sort order

### `siteSettings`

* [ ] Site title
* [ ] Default SEO
* [ ] Navigation
* [ ] Footer content
* [ ] Contact email
* [ ] Phone number
* [ ] Address
* [ ] Social links


---

# 5. Front-End Migration

## Objective

Connect the completed front-end to Sanity without breaking the Phase 2 design.

## Checklist

* [ ] Install Sanity packages
* [ ] Configure Sanity client
* [ ] Add GROQ queries
* [ ] Add image URL builder
* [ ] Replace static content access with Sanity functions
* [ ] Keep existing components as presentational components
* [ ] Normalize Sanity responses into front-end view models
* [ ] Add Portable Text rendering
* [ ] Add article page dynamic content
* [ ] Add service page dynamic content
* [ ] Add global site settings
* [ ] Add SEO metadata from CMS
* [ ] Add related article logic
* [ ] Add fallback handling for missing content
* [ ] Test all routes

## Suggested folders

```txt
lib/
  sanity/
    client.ts
    image.ts
    queries/
      pages.ts
      services.ts
      insights.ts
      settings.ts
  content/
    getPages.ts
    getServices.ts
    getInsights.ts
    getSiteSettings.ts
    normalize.ts
  seo/
    metadata.ts
```

## Portable Text

* [ ] Define supported block types
* [ ] Define serializers/components
* [ ] Handle headings
* [ ] Handle paragraphs
* [ ] Handle links
* [ ] Handle lists
* [ ] Handle images
* [ ] Handle pull quotes
* [ ] Handle callouts
* [ ] Handle code blocks only if needed

## Related content

* [ ] Allow manual related article picks
* [ ] Add fallback based on category/tag
* [ ] Exclude current article
* [ ] Limit number of related articles

## SEO

* [ ] Generate metadata for pages
* [ ] Generate metadata for services
* [ ] Generate metadata for insights
* [ ] Add fallback metadata from site settings
* [ ] Add Open Graph image support when available

---

# Phase 3 QA

## CMS QA

* [ ] Content can be created
* [ ] Content can be edited
* [ ] Required fields are enforced
* [ ] Preview titles are readable
* [ ] Images require alt text
* [ ] Slugs generate correctly
* [ ] References work correctly

## Front-End QA

* [ ] Home page renders from CMS
* [ ] About page renders from CMS
* [ ] Services page renders from CMS
* [ ] Insights listing renders from CMS
* [ ] Article pages render from CMS
* [ ] Related articles work
* [ ] Metadata works
* [ ] Missing content does not break pages
* [ ] Responsive layouts still work
* [ ] No hydration errors
* [ ] No console errors

## Deployment QA

* [ ] Environment variables configured
* [ ] Sanity project ID configured
* [ ] Dataset configured
* [ ] API version configured
* [ ] Vercel deployment succeeds
* [ ] Domain configured
* [ ] SSL active
* [ ] Production content renders
* [ ] Contact form still works
* [ ] Final responsive QA completed

---

# Completion Criteria

Phase 3 is complete when:

* [ ] Sanity CMS is implemented
* [ ] Core content is editable in Sanity
* [ ] Front-end pages render CMS content
* [ ] SEO metadata is CMS-driven
* [ ] Content migration is complete
* [ ] Site is deployed
* [ ] Domain is connected
* [ ] Final QA is complete
* [ ] Site is ready for launch
