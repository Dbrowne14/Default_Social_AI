# Services

## Services Page Header

### Services page header copy

Location: `components/services/ServicesHeader.tsx`

Content:

- Eyebrow ("Services")
- Page heading
- Supporting introduction

Target model:

`servicesPage`

Notes:

- Page heading and supporting copy should become CMS-managed.
- Heading line breaks should continue to be supported through the `TitleLine[]` model.
- The emphasised "AI-native" text should remain a presentational concern handled by the React component.
- `PageHeader` remains a reusable presentational component.
- Layout, typography, spacing, and responsive behaviour remain code-controlled.

## Services Table of Contents

### Sticky service navigation

Location: `components/services/StickyTocPills.tsx`

Source content:

`data/ServicesDetails.ts`

Target model:

`service`

Notes:

- Navigation items should be derived from the `service` model.
- Service IDs, link names, and anchors should not be duplicated.
- This component should continue to generate its navigation from the available services.
- Active state, scrolling behaviour, pill styling, spacing, and responsive behaviour remain code-controlled.

### Code controlled components

Components:
- `components/services/StickyToc.tsx`

### Service detail subcomponents

Locations:

- `components/services/servicesDetailed/ServiceOffers.tsx`
- `components/services/servicesDetailed/ServicesAi.tsx`
- `components/services/servicesDetailed/ServicesProcessStrip.tsx`

Source content:

`data/ServicesDetails.ts`

Target model:

`service`

Mapped fields:

- `service.offers`
- `service.aiCallout`
- `service.processSteps`

Notes:

- These components should remain presentational.
- They should receive service data as props.
- They do not need their own CMS models.
- Offer title/description should come from `service.offers`.
- AI callout title/description should come from `service.aiCallout`.
- Process step ID/title/description should come from `service.processSteps`.
- Icons, layout, spacing, borders, typography, and responsive visibility remain code-controlled.

### Future data flow

The Services page should fetch service data once at the page level and pass it down through the component tree.

```text
Services Page
│
├── getAllServices()
│
└── services
    │
    ├── StickyTocPills
    ├── ServicesBuckets
    └── ServicesDetailed
          │
          ├── ServiceOffers
          ├── ServicesAi
          └── ServicesProcessStrip
```

Notes:

- Service data should be fetched once via the content access layer.
- Child components should receive only the data they require through props.
- Presentational components should remain unaware of where the data originates.
- No child component should query Sanity or import static data directly.
- This structure prepares the application for the transition from static data to the Sanity content layer.