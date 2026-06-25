# Default Social Content Model Plan

## Source audit

### Static data files

- `data/ServicesDetails.ts`
- `data/blogData.ts`
- `data/companyInfo.ts`
- `data/navData.ts`
- `data/teamData.ts`

### Likely hardcoded content areas

- Home page hero and landing sections
- About page copy
- Services landing copy
- Insights landing copy
- Footer copy
- Contact section copy
- CTA copy
- Article template copy

---

## Entity mapping

| Current source | Target model |
|---------------|--------------|
| `ServicesDetails.ts` | `service` |
| `blogData.ts` | `insight` |
| `teamData.ts` | `person` |
| `companyInfo.ts` | `aboutPage.companyFacts` |
| `navData.ts` | Code-defined `NavigationItem[]` |

---

## Planned document types

- `homePage`
- `aboutPage`
- `servicesPage`
- `insightsPage`
- `service`
- `insight`
- `person`
- `siteSettings`

---

## Planned reusable object types

- `seo`
- `cta`
- `companyFact`
- `titleLine`
- `serviceOffer`
- `serviceTag`
- `serviceProcessStep`
- `serviceCallout`
- `articleSection`
- `articleTextBlock`
- `pullQuote`
- `contactDetails`
- `link`

---

## CMS-managed content

### Pages

- Home page copy
- About page copy
- Services page introduction
- Insights page introduction

### Editorial content

- Services
- Insights
- People (team members/authors)
- Company facts
- Contact details
- CTA copy
- SEO metadata

---

## Code-controlled

- Navigation
- Route structure
- Layout
- Responsive behaviour
- Tailwind styling
- Component structure
- Animations
- Form behaviour
- Footer layout
- Navigation behaviour

---

## Derived content

The following should be generated rather than managed separately:

- Service navigation from `service.linkName`
- Footer practice links from `service` content