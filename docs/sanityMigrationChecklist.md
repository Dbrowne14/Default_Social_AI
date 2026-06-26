
# Default Social Content Model Plan

## Goal

Complete the architectural improvements identified during the code review before introducing the CMS.

## Checklist


### 1. Finalise documentation first

- [x] Finalise content model documentation


Why: this becomes the source of truth before refactoring.

---

### 2. Split the types

- [ ] Split `types/index.ts` into domain-specific type files
- [ ] Create shared reusable object types
- [ ] Create summary/detail models where appropriate
- [ ] Reduce unnecessary optional fields
- [ ] Match types to future CMS models

Why: types define the shape your content layer and components will use.

---

### 3. Clean the data model

- [ ] Merge `team` and `author` into a single `person` model
- [ ] Remove `navData`
- [ ] Remove duplicated data structures
- [ ] Review placeholder data structures
- [ ] Remove obsolete static data files only after nothing imports them

Why: clean source data before routing it through the content layer.

---

### 4. Build the content access layer

- [ ] Introduce a `lib/content/` layer
- [ ] Create content access functions
- [ ] Prepare functions with future Sanity names

Example:

- `getAllServices()`
- `getAllInsights()`
- `getFeaturedInsight()`
- `getAboutPage()`
- `getSiteSettings()`

Why: this lets you switch from static data to Sanity later without rewriting components again.

---

### 5. Move routes to the content layer

- [ ] Move all routes to use the content layer
- [ ] Stop importing directly from `data/` in route files
- [ ] Pass data through props rather than importing in components

Why: routes should own data fetching.

---

### 6. Refactor components gradually

- [ ] Stop importing directly from `data/` in components
- [ ] Keep components focused on rendering
- [ ] Keep client components focused on interaction
- [ ] Ensure features own their own content where appropriate
- [ ] Review shared UI components

Why: do this last so you always have working data shapes first.

---

### 7. Update repo documentation

- [ ] Update repository structure documentation

Why: only update the structure docs after the folders have actually changed.

The key sequence is:

Documentation → Types → Data cleanup → Content layer → Routes → Components

# Phase 3 — Sanity CMS

## Goal

Replace static content with Sanity while preserving the completed front-end.

- [ ] Implement schemas
- [ ] Populate sample content
- [ ] Build GROQ queries
- [ ] Connect the content layer
- [ ] Replace static imports
- [ ] Build image pipeline
- [ ] Add previews
- [ ] QA

---

# Phase 4 — Performance & SEO

## Goal

Optimise the completed CMS-powered site before launch.

### Performance

- [ ] Audit Core Web Vitals
- [ ] Optimise images
- [ ] Optimise fonts
- [ ] Remove unused JavaScript
- [ ] Review bundle size
- [ ] Add lazy loading where appropriate

### SEO

- [ ] Dynamic metadata
- [ ] Open Graph images
- [ ] Structured data
- [ ] XML sitemap
- [ ] Robots.txt
- [ ] Canonicals
- [ ] Breadcrumb schema
- [ ] Article schema

### Accessibility

- [ ] Keyboard navigation
- [ ] Focus management
- [ ] Heading hierarchy
- [ ] Colour contrast
- [ ] Screen reader audit

---

# Phase 5 — Production Readiness

## Goal

Prepare the project for deployment.

### Analytics

- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Cookie consent
- [ ] Event tracking

### Error handling

- [ ] Custom 404
- [ ] Error boundaries
- [ ] Loading states
- [ ] Empty states

### Security

- [ ] Environment variables
- [ ] API key review
- [ ] CSP headers
- [ ] Security headers

### Deployment

- [ ] Vercel production
- [ ] Domain
- [ ] SSL
- [ ] Redirects
- [ ] Monitoring

---

# Phase 6 — AI Concierge

## Goal

Introduce AI capabilities after the marketing site has launched.

### Foundation

- [ ] Define AI architecture
- [ ] Choose model provider
- [ ] Conversation storage
- [ ] Prompt management

### Features

- [ ] AI concierge
- [ ] Lead qualification
- [ ] Service recommendations
- [ ] Knowledge base retrieval
- [ ] Contact hand-off

### Operations

- [ ] Logging
- [ ] Analytics
- [ ] Feedback collection
- [ ] Prompt versioning

---

# Phase 7 — Continuous Improvement

## Goal

Continue evolving the platform after launch.

- [ ] CMS editorial improvements
- [ ] New content models
- [ ] Additional services
- [ ] New insight formats
- [ ] A/B testing
- [ ] Personalisation
- [ ] AI search optimisation
- [ ] Performance reviews