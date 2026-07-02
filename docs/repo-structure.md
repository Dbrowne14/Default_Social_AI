# Repository Structure

This document maps the structure of the `Default_Social_AI` project so it can be downloaded or shared as a quick reference.

## Project overview

`Default_Social_AI` is a private Next.js application for the Default Social website. The project uses the App Router layout under `app/`, TypeScript content/data modules, reusable React components, and documentation/audit notes under `docs/`.

## Top-level directories

| Path | Purpose |
| --- | --- |
| `app/` | Next.js application routes, root layout, global styles, metadata, and server actions. |
| `components/` | Reusable UI, page section, layout, navigation, insight, service, and about components. |
| `data/` | Static content/data objects used to populate pages and content helpers. |
| `docs/` | Planning documents, migration checklists, conventions, QA notes, audits, and this structure guide. |
| `lib/` | Shared library modules, including content access helpers and validation schemas. |
| `public/` | Public static assets served by the application. |
| `types/` | Shared TypeScript type definitions for pages, content, people, services, insights, and site settings. |

## Top-level files

| File | Purpose |
| --- | --- |
| `AGENTS.md` | Agent-specific repository instructions. |
| `CLAUDE.md` | Claude-oriented project guidance. |
| `README.md` | Project readme. |
| `eslint.config.mjs` | ESLint configuration. |
| `next.config.ts` | Next.js configuration. |
| `package.json` | Package metadata, scripts, and dependency list. |
| `package-lock.json` | Locked npm dependency graph. |
| `postcss.config.mjs` | PostCSS configuration. |
| `tsconfig.json` | TypeScript compiler configuration. |

## Application routes and framework files

```text
app/
├── about/
│   └── page.tsx                  # About page route
├── actions/
│   └── contact.ts                # Contact form server action
├── insights/
│   ├── [slug]/
│   │   └── page.tsx              # Dynamic insight article route
│   └── page.tsx                  # Insights listing route
├── services/
│   └── page.tsx                  # Services page route
├── favicon.ico                   # Site favicon
├── globals.css                   # Global styles
├── layout.tsx                    # Root application layout
└── page.tsx                      # Home page route
```

## Components

```text
components/
├── about/
│   ├── AboutApproach.tsx
│   ├── AboutGroupStructure.tsx
│   ├── AboutHeader.tsx
│   ├── AboutTeam.tsx
│   └── AboutValues.tsx
├── home/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── HeroAnimation.tsx
│   │   ├── HeroFooter.tsx
│   │   ├── HeroHeaderRibbon.tsx
│   │   └── HeroMidContent.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   └── contactArchitecture.md
│   ├── marqueeTicker/
│   │   ├── MarqueeTicker.tsx
│   │   └── MarqueeTrack.tsx
│   ├── servicesOverview/
│   │   ├── ServicesBuckets.tsx
│   │   └── ServicesOverview.tsx
│   ├── AboutOverview.tsx
│   ├── ClientLogoTicker.tsx
│   ├── InsightsOverview.tsx
│   └── ValueProp.tsx
├── insights/
│   ├── insightsInteractive/
│   │   ├── BlogPost.tsx
│   │   ├── InsightsBlogPosts.tsx
│   │   ├── InsightsFilter.tsx
│   │   ├── InsightsFilterToc.tsx
│   │   ├── InsightsInteractive.tsx
│   │   └── types.ts
│   ├── insightsPage/
│   │   ├── InsightsContent/
│   │   │   ├── InsightsArticleBody.tsx
│   │   │   ├── InsightsArticleProse.tsx
│   │   │   └── InsightsArticleRail.tsx
│   │   ├── InsightsArticleHeader.tsx
│   │   └── InsightsArticleRelated.tsx
│   ├── InsightsFeatured.tsx
│   └── InsightsHeader.tsx
├── layout/
│   ├── footer/
│   │   ├── Footer.tsx
│   │   └── FooterRibbon.tsx
│   ├── navigation/
│   │   ├── MobileMenu.tsx
│   │   ├── NavCloseButton.tsx
│   │   ├── NavHamburgerMenu.tsx
│   │   ├── NavOpenButton.tsx
│   │   ├── Navigation.tsx
│   │   └── types.ts
│   └── FirstLoaderStrip.tsx
├── services/
│   ├── servicesDetailed/
│   │   ├── ServiceOffers.tsx
│   │   ├── ServicesAi.tsx
│   │   ├── ServicesDetailed.tsx
│   │   └── ServicesProcessStrip.tsx
│   ├── ServicesHeader.tsx
│   ├── StickyToc.tsx
│   └── StickyTocPills.tsx
└── ui/
    ├── BlogCard.tsx
    ├── Button.tsx
    ├── Cta.tsx
    ├── DummyClientData.tsx
    ├── LoaderStrip.tsx
    ├── Navlink.tsx
    ├── PageHeader.tsx
    ├── RichTitle.tsx
    ├── SingleStatBlock.tsx
    ├── SocialsFrame.tsx
    └── TeamBio.tsx
```

## Content and data modules

```text
data/
├── aboutPage.ts
├── homePage.ts
├── insightsData.ts
├── insightsPage.ts
├── navigation.ts
├── peopleData.ts
├── serviceData.ts
├── servicesPage.ts
└── siteSettings.ts

lib/
├── content/
│   ├── aboutPage.ts
│   ├── homePage.ts
│   ├── insights.ts
│   ├── insightsPage.ts
│   ├── people.ts
│   ├── services.ts
│   ├── servicesPage.ts
│   └── site.ts
└── validation/
    └── contact.ts

types/
├── aboutPage.ts
├── homePage.ts
├── insights.ts
├── insightsPage.ts
├── person.ts
├── services.ts
├── servicesPage.ts
├── shared.ts
└── site.ts
```

## Documentation and audits

```text
docs/
├── audits/
│   ├── about-page-hardcoded.md
│   ├── data-hardcoded.md
│   ├── home-page-harcoded.md
│   ├── insights-page-hardcoded.md
│   ├── insights-slug-hardcoded.md
│   ├── layout-hardcoded.md
│   ├── seo-harcoded.md
│   └── services-page-hardcoded.md
├── content-model-plan.md
├── conventions.md
├── phase25.md
├── repo-structure.md
├── resposivenessQA.md
└── sanityMigrationChecklist.md
```

## Public assets

```text
public/
└── assets/
    └── default-media-logo.png
```

## npm scripts

| Script | Command | Purpose |
| --- | --- | --- |
| `dev` | `next dev` | Run the local development server. |
| `build` | `next build` | Build the application for production. |
| `start` | `next start` | Start the production server after a build. |
| `lint` | `eslint` | Run ESLint checks. |