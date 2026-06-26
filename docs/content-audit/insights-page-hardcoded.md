## Insights Page Header

### Insights page header copy

Location: `components/insights/InsightsHeader.tsx`

Content:

- Eyebrow ("Insights")
- Page heading
- Supporting introduction

Target model:

`insightsPage`

Notes:

- Page heading and supporting introduction should become CMS-managed.
- Heading line breaks should continue to be supported through the `TitleLine[]` model.
- The emphasised "practice" text should remain a presentational concern handled by the React component.
- `PageHeader` remains a reusable presentational component.
- Layout, typography, spacing, and responsive behaviour remain code-controlled.