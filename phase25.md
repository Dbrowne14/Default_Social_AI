# Default Social Website – Phase 2.5 Handoff

## Current Status

### Completed

* [x] Initial Codex architecture review completed
* [x] Lint errors resolved
* [x] Unescaped entity issues fixed
* [x] Missing key issues fixed
* [x] next/link issues fixed
* [x] img → Next Image migration completed
* [x] Hook dependency warnings reviewed
* [x] LoaderStrip lint issue addressed

### Project Assessment

* Front-end content largely complete
* Core routes implemented
* Visual design largely complete
* MVP surface area exists
* Not yet ready for Phase 3 (Sanity)

---

# Priority 1 – Fix Article Architecture

## Goal

Remove client-side slug resolution using `usePathname()`.

### Current Problem

Article content is being resolved inside a client component.

Pattern to remove:

```tsx
const pathname = usePathname();
const slug = pathname.split("/").pop();
```

### Target Architecture

Route owns slug:

```tsx
app/insights/[slug]/page.tsx
```

Example:

```tsx
export default function Page({ params }) {
  const article = blogPosts.find(
    (post) => post.slug === params.slug
  );

  if (!article) notFound();

  return <InsightsArticleBody article={article} />;
}
```

### Reason

Prepares app for:

* Sanity
* Server rendering
* Better SEO
* Metadata generation
* Cleaner routing

Status:

* [x] Not started
* [x] In progress
* [x] Complete

---

# Priority 2 – Metadata

## Goal

Replace default Next.js metadata.

Current concern:
Site may still contain Create Next App defaults.

### Add

#### Root Metadata

* Title
* Description
* Open Graph
* Twitter Card

#### Route Metadata

* Home
* Services
* About
* Insights
* Insight Articles

### Reason

Required for:

* SEO
* Social sharing
* MVP launch readiness

Status:

* [x] Not started
* [x] In progress
* [x] Complete

---

# Priority 3 – Contact Form Decision

## Goal

Define MVP behaviour.

### Question

Is MVP:

A. Visual prototype only

or

B. Real lead capture

### If Real Lead Capture

Implement:

* Validation
* Success state
* Error state
* Submission handling

Potential providers:

* Resend
* Formspree
* EmailJS
* Next API route

Status:

* [x] Not started
* [x] In progress
* [x] Complete

---

# Priority 4 – Accessibility Pass

## Focus Areas

### Navigation

Check:

* Keyboard navigation
* Focus states
* Mobile menu behaviour
* aria-expanded
* aria-controls

### Motion

Check:

* Hero animation
* Reduced motion support

Example:

```tsx
prefers-reduced-motion
```

### Forms

Check:

* Labels
* Error messaging
* Focus handling

Status:

* [x] Not started
* [x] In progress
* [ ] Complete

---

# Priority 5 – Sanity Preparation

Do NOT start full integration yet.

### First

Document content models.

Candidate schemas:

#### Homepage

* Hero
* Services Preview
* About Preview
* Insights Preview

#### Services

* Title
* Slug
* Description
* Process
* AI Callout

#### Insights

* Title
* Slug
* Author
* Date
* Read Time
* Tags
* Content Blocks

#### Team

* Name
* Role
* Bio
* Image

Status:

* [ ] Not started
* [ ] In progress
* [ ] Complete

---

# Phase 3 Entry Criteria

Before beginning Sanity:

* [x] Lint passes
* [ ] Article routing refactored
* [ ] Metadata completed
* [ ] Contact form decision made
* [ ] Accessibility pass completed
* [ ] Sanity schema plan documented

---

# Recommended Next Task

1. Refactor article slug architecture.
2. Implement metadata.
3. Decide contact form strategy.
4. Accessibility pass.
5. Design Sanity schemas.
6. Begin Phase 3 integration.
