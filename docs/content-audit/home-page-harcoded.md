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