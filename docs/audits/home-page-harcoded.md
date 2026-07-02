# Home page

## Hero Section

### Hero supporting copy

Location: `components/home/Hero/HeroFooter.tsx`

Content:

- Supporting marketing paragraph
- Primary CTA ("Get started")
- Secondary CTA ("Our Services")

Target model:

`homePage`

Notes:

- Supporting copy should become CMS-managed.
- CTA labels and destinations should become reusable CTA objects.
- Layout, spacing, animation, and button components remain code-controlled.

### Code controlled components

Components:
- `components/home/Hero/HeroAnimation.tsx`
- `components/home/Hero/HeroHeaderRibbon.tsx`
- `components/home/Hero/HeroMidContent.tsx`
- `components/home/Hero/Hero.tsx`

## Marquee

Location: `components/home/marqueeTicker/MarqueeTrack.tsx`

### Current purpose

Displays a continuously scrolling list of the studio's core practice areas on the home page.

### Current implementation

```ts
const services = [
  "Web Development",
  "SEO & Organic Growth",
  "Social & Viral Campaigns",
  "Social-First Creative",
  "Marketing Strategy",
  "AI Integration",
];
```

---

###  Audit findings

The marquee currently hardcodes a list of practice labels.

Most of these correspond directly to core services, however `AI Integration` represents a broader AI practice rather than a standalone service.

This introduces a modelling decision before CMS migration.

---

###  Target model

The marquee should not maintain its own independent list of labels.

Where possible, it should derive its content from the `service` model to avoid duplication.

Example:

```ts
services
  .filter(service => service.featuredInTicker)
```

---

###  Open design decision

Determine how **AI Practice / AI Integration** should be represented.

Options:

- Model it as a full `service` document if it becomes a standalone offering.
- Keep it as an editorial category/theme used by Insights and marketing content if it remains a cross-cutting capability.

This decision should be made before implementing the Sanity schema.

---

###  CMS assessment

#### CMS-managed

- Service names
- Service ordering (if required)
- Whether a service appears in the home page ticker

#### Code-controlled

- Marquee animation
- Scroll behaviour
- Typography
- Alternating italic styling
- Separator dots
- Responsive layout

---

### Notes

- Avoid maintaining a second list of service names.
- The marquee should derive its content from reusable service data where appropriate.
- If AI remains a cross-cutting practice rather than a standalone service, it should not be duplicated solely for the marquee.

### Code controlled components

Components:
- `components/home/marqueeTicker/MarqueeTrack.tsx`

## Value Proposition

### Value proposition copy

Location: `components/home/ValueProp.tsx`

Content:

- Eyebrow ("01 · The proposition")
- Main proposition statement
- Supporting paragraph (lede)

Target model:

`homePage`

Notes:

- Value proposition copy should become CMS-managed.
- The section belongs to the `homePage` document rather than a reusable entity.
- Typography, emphasis styling, spacing, and responsive layout remain code-controlled.
- The React component should continue to control how the proposition is visually presented.

## Client Logo Ticker

### Client ticker data

Location: `components/ui/DummyClientData.tsx`

Content:

- Client names
- Client display styling

Current issue:

- Client data is hardcoded directly inside a UI component.
- The component is named `DummyClientData`, which suggests temporary placeholder content.
- Client names and visual treatments are mixed together.

Target model:

`homePage` or `client`

Recommended target:

`client`

Suggested shape:

```ts
Client {
  name: string;
  logoText?: string;
  logoImage?: ImageWithAlt;
  featuredInTicker?: boolean;
  sortOrder?: number;
}
```

## Services Overview

### Services overview copy

Location: `components/home/servicesOverview/ServicesOverview.tsx`

Content:

- Eyebrow ("02 · Services")
- Section heading
- Supporting paragraph/meta copy
- CTA ("Explore all services")

Target model:

`homePage`

Notes:

- The section heading and supporting copy should become CMS-managed.
- CTA label and destination should become a reusable CTA object.
- `ServicesBuckets` should derive from the `service` content model rather than hardcoded service data.
- Layout, spacing, heading line breaks, button styling, and responsive behaviour remain code-controlled.

### Services buckets

Location: `components/home/servicesOverview/ServicesBuckets.tsx`

Source content:

`data/ServicesDetails.ts`

Target model:

`service`

Notes:

- This component should be driven by `service` documents.
- It should not have its own CMS model.
- Service title, category, description, tags, and featured status should come from the `service` model.
- The grid layout, featured card layout, hover state, arrow, tag styling, and responsive behaviour remain code-controlled.
- `service.title` should continue to support intentional line breaks, likely through a `TitleLine[]` model.

## About Overview

### About overview copy

Location: `components/home/AboutOverview.tsx`

Content:

- Eyebrow ("03 · About")
- Section heading
- Supporting paragraph
- Inline CTA ("More about the studio →")
- Key people label
- Supporting copy for the featured team members

Target model:

`homePage`

Notes:

- Section heading and supporting copy should become CMS-managed.
- The inline CTA should become a reusable CTA object.
- The "Key people" label and supporting text should become CMS-managed.
- Heading line breaks should continue to be supported through the `TitleLine[]` model.
- Layout, spacing, typography, responsive behaviour, and card layout remain code-controlled.

### Featured team members

Location: `components/home/AboutOverview.tsx`

Source content:

`data/teamData.ts`

Target model:

`person`

Notes:

- Featured team members should be derived from the `person` model.
- The current `key` property should become a more descriptive flag (for example `featured` or `featuredOnHome`).
- `TeamBio` remains a reusable presentational component.
- Card layout, styling, and responsive behaviour remain code-controlled.

## Insights Overview

### Insights overview copy

Location: `components/home/InsightsOverview.tsx`

Content:

- Eyebrow ("04 · Insights")
- Section heading
- Supporting paragraph/meta copy
- Inline CTA ("All insights →")

Target model:

`homePage`

Notes:

- Section heading and supporting copy should become CMS-managed.
- The inline CTA should become a reusable CTA object.
- Heading line breaks should continue to be supported through the `TitleLine[]` model.
- Layout, spacing, typography, responsive behaviour, and card grid remain code-controlled.

### Featured insights

Location: `components/home/InsightsOverview.tsx`

Source content:

`data/blogData.ts`

Target model:

`insight`

Notes:

- Featured/latest insight cards should be driven by `insight` documents.
- The current `insights.slice(0, 3)` logic should eventually move into the content access layer.
- `BlogCard` remains a reusable presentational component.
- Card layout, styling, and responsive behaviour remain code-controlled.

## Contact Section

### Contact section copy

Location: `components/home/contact/ContactForm.tsx`

Content:

- Eyebrow ("05 · Contact")
- Section heading
- Supporting paragraph
- Studio location
- Email address
- Phone number
- Group affiliation label

Target model:

`homePage` and `siteSettings`

Notes:

- Contact section heading and supporting copy should become CMS-managed under `homePage`.
- Contact details should come from global `siteSettings.contact`.
- Heading line breaks should continue to be supported through the `TitleLine[]` model.
- Layout, spacing, typography, form styling, and responsive behaviour remain code-controlled.

### Contact form configuration

Location: `components/home/contact/ContactForm.tsx`

Current hardcoded content:

- Enquiry type options
- Field labels
- Placeholder text
- Submit button text
- Pending button text

Target model:

Code-controlled for Phase 3

Notes:

- The form structure should remain code-controlled.
- Validation and server action behaviour should remain code-controlled.
- Enquiry type options can stay in code for now.
- Only move enquiry options into the CMS later if non-developers need to change them.
- Field labels and placeholders are part of the form UX and can remain code-controlled initially.