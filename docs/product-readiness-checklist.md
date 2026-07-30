# Default Social — Production Readiness Checklist

> **Status:** Design approved by client. Focus has shifted from design to production readiness and launch.

---

# 1. Resolve Sanity CMS Issues (Highest Priority)

**Goal:** Ensure all CMS content is rendering correctly before testing.

## Checklist

- [x] Identify missing content
- [x] Confirm documents are published (not drafts)
- [x] Verify GROQ queries return all expected fields
- [x] Check mapping functions / data layer
- [x] Verify components render all returned data
- [x] Investigate Next.js caching / revalidation
- [x] Confirm Vercel production reflects latest content
- [x] Test Studio → Website publishing workflow

---

# 2. Final UI Polish

**Goal:** Complete the last visual refinements before launch.

## Branding

- [x] Increase logo size to better match Default Media

## Contact

- [x] Remove phone number entirely
- [x] Remove phone field from Sanity schema
- [x] Remove phone from GROQ queries
- [x] Remove phone from TypeScript types
- [x] Remove phone UI/components

## Visual Review

- [x] Final spacing pass
- [x] Typography consistency
- [x] Hover state review
- [x] Focus state review
- [x] Border consistency
- [x] Motion/animation consistency
- [x] Team page polish

---

# 3. Responsive QA

Test every page at:

- [x] 375px
- [x] 430px
- [x] 768px
- [x] 1024px
- [x] 1440px+

## Pages

- [x] Home
- [x] Services
- [x] About
- [x] Team
- [x] Team biography
- [x] Insights
- [x] Insight article
- [x] Contact

## Check for

- [x] Overflow
- [x] Wrapping issues
- [x] Image cropping
- [x] Hero layouts
- [x] Navigation
- [x] Footer
- [x] Forms

UI work to redo:

- [x] Page heading sizing 

---

# 4. Functional QA

## Navigation

- [ ] Internal links
- [ ] Previous / Next navigation
- [ ] Mobile navigation
- [ ] 404 page

## CMS

- [ ] Rich text rendering
- [ ] Images
- [ ] Slugs
- [ ] Dynamic metadata
- [ ] Content updates correctly

## Forms

- [ ] Contact form
- [ ] Validation
- [ ] Success state

---

# 5. Performance Validation

Re-run Lighthouse after final changes.

## Performance

- [ ] Core Web Vitals
- [ ] Image optimisation
- [ ] Font loading
- [ ] Bundle review
- [ ] Lazy loading
- [ ] Remove unused code

---

# 6. SEO Validation

- [ ] Metadata
- [ ] Open Graph
- [ ] Twitter cards
- [ ] XML sitemap
- [ ] robots.txt
- [ ] Canonicals
- [ ] Structured data
- [ ] Breadcrumb schema
- [ ] Article schema

---

# 7. Accessibility

- [ ] Keyboard navigation
- [ ] Focus management
- [ ] Heading hierarchy
- [ ] Colour contrast
- [ ] Screen reader review

---

# 8. Content Population (After Client Call)

## Team

- [ ] Headshots
- [ ] Biographies
- [ ] Roles
- [ ] LinkedIn links (if applicable)

## Site Content

- [ ] Homepage
- [ ] Services
- [ ] About
- [ ] Team
- [ ] Insights
- [ ] Contact details

---

# 9. Final User Acceptance Testing (UAT)

Client review before launch.

- [ ] Desktop review
- [ ] Mobile review
- [ ] CMS editing
- [ ] Contact form
- [ ] Navigation
- [ ] Team pages
- [ ] Insights

Address only genuine issues and avoid introducing new design changes.

---

# 10. Production Launch

## Final Checks

- [ ] Production build
- [ ] Lighthouse audit
- [ ] Cross-browser testing
- [ ] Contact form end-to-end
- [ ] Analytics (if applicable)
- [ ] Final content review
- [ ] Deploy production domain

---

# Post-Launch

## AI Concierge

After launch, begin planning and implementation of the AI Concierge platform.

- [ ] Discovery
- [ ] UX
- [ ] Conversation design
- [ ] Knowledge architecture
- [ ] AI implementation
- [ ] Testing