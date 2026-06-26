## About Page Header

### About page header copy

Location: `components/about/AboutHeader.tsx`

Content:

- Eyebrow ("About")
- Page heading
- Supporting introduction

Target model:

`aboutPage`

Notes:

- Page heading and supporting introduction should become CMS-managed.
- Heading line breaks should continue to be supported through the `TitleLine[]` model.
- The emphasised "signal" text should remain a presentational concern handled by the React component.
- `PageHeader` remains a reusable presentational component.
- Layout, typography, spacing, and responsive behaviour remain code-controlled.

### Company facts

Location: `components/about/AboutHeader.tsx`

Source content:

`data/companyInfo.ts`

Target model:

`aboutPage.companyFacts`

Notes:

- Company facts should be derived from the `aboutPage` document.
- The current `companyInfo` array should become a reusable `companyFact[]` object.
- The list layout, typography, borders, spacing, and responsive behaviour remain code-controlled.

# About Values → CMS Migration

## Goal

Keep the layout, typography and responsive design in the codebase while making all editorial copy manageable through the CMS.

---

## Component-owned (Frontend)

The following should remain hardcoded in the component:

- Section layout
- Grid structure
- Spacing
- Typography
- Borders and accent lines
- Responsive behaviour
- Decorative elements

---

## CMS-managed (Editorial)

### String fields

- `eyebrow`
- `intro`
- `closingLabel`

### Portable Text / Rich Text fields

- `lead`
- `body`
- `body2`
- `closing`

Portable Text allows editors to:

- Add italic emphasis
- Add inline formatting
- Preserve the current editorial styling without hardcoding `<em>` tags

---

## Suggested Sanity Structure

```ts
aboutValues {
  eyebrow: string
  lead: portableText
  intro: string
  body: portableText
  body2: portableText
  closingLabel: string
  closing: portableText
}
```

---

## Frontend

Replace hardcoded copy with CMS content while keeping the existing layout unchanged.

Example:

```tsx
<PortableText value={aboutValues.lead} />
```

instead of

```tsx
<p>
  We started Default Social because...
  <em>much louder.</em>
</p>
```

---

## Outcome

- ✅ Marketing copy becomes fully editable
- ✅ Inline emphasis remains editable
- ✅ Design system stays in React
- ✅ No layout changes required when copy changes
- ✅ Better separation between presentation and content

## Group Structure

### Group structure section

Location: `components/about/AboutGroupStructure.tsx`

Content:

- Eyebrow ("02 · Our place in the group")
- Section heading
- Supporting introduction
- Group structure cards
- Closing statement

Target model:

`aboutPage`

Notes:

- The section introduction should become CMS-managed.
- The group structure should become an object within the `aboutPage` document rather than a standalone document.
- Each group entry should be modelled as a reusable object containing:
  - Type
  - Label
  - Name
  - Description
- The closing statement should become CMS-managed.
- Heading line breaks should continue to be supported through the `TitleLine[]` model.
- Card layout, highlighting of the current studio, spacing, typography, gradients, and responsive behaviour remain code-controlled.

### Group structure entries

Current source:

```ts
groupStructure[]
```

Suggested object shape:

```ts
GroupEntry {
  type: "parent" | "self" | "sibling";
  label: string;
  name: string;
  description: string;
}
```

Notes:

- Entries should be managed as an array within the `aboutPage` document.
- The component should derive the parent and sibling sections from the `type` field.

## About Approach

### About approach section

Location: `components/about/AboutApproach.tsx`

Content:

- Eyebrow ("04 · Approach")
- Section heading
- Introductory statement
- Approach principles

Target model:

`aboutPage`

Notes:

- The section heading and introductory statement should become CMS-managed.
- Heading line breaks should continue to be supported through the `TitleLine[]` model.
- Approach principles should become an array of reusable objects within the `aboutPage` document.
- Layout, typography, spacing, borders, decorative accents, and responsive behaviour remain code-controlled.

### Approach principles

Current source:

`approachData[]`

Suggested object shape:

```ts
ApproachPrinciple {
  id: string;
  title: string;
  description: string;
}
```

Notes:

- Principles should be managed as an ordered array within the `aboutPage` document.
- The component should render the array without owning any editorial content.

## About Team

### About team section

Location: `components/about/AboutTeam.tsx`

Content:

- Eyebrow ("05 · The team")
- Section heading
- Supporting paragraph
- Team member cards

Target model:

`aboutPage` and `person`

Notes:

- Section heading and supporting copy should become CMS-managed under `aboutPage`.
- Team member data should come from the reusable `person` model.
- Heading line breaks should continue to be supported through the `TitleLine[]` model.
- `TeamBio` remains a reusable presentational component.
- Layout, card styling, horizontal scroll behaviour, responsive grid, typography, and background treatment remain code-controlled.

### Team members

Source content:

`data/teamData.ts`

Target model:

`person`

Notes:

- The team list should be derived from `person` documents.
- People shown in this section should be filtered by `isTeamMember` or similar.
- Display order should be controlled by a `sortOrder` field.
- The current `team` array should eventually be replaced by CMS-managed `person` documents.