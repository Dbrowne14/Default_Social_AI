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

## Featured Insight

### Featured insight section

Location: `components/insights/InsightsFeatured.tsx`

Content:

- Featured section label ("Featured")
- Featured insight
- CTA ("Read More")

Target model:

`insightsPage` and `insight`

Notes:

- The featured section label should become CMS-managed under `insightsPage`.
- The featured article should be derived from the `insight` model.
- Featured status should be controlled by a `featured` field on the `insight` document.
- The CTA label should become a reusable CTA object if shared across the site.
- Background treatment, layout, spacing, typography, and responsive behaviour remain code-controlled.

### Featured article

Source content:

`data/blogData.ts`

Target model:

`insight`

Notes:

- The featured article should be selected through the content access layer.
- Author information should be derived from the related `author` document.
- Article metadata, title, excerpt, and slug should come from the `insight` model.
- The component should render whichever article is marked as featured.

## Insight Filters

### Insight filter navigation

Location: `components/insights/insightsInteractive/InsightsFilterToc.tsx`

Current source:

`filterData`

Target model:

`category`

Notes:

- Insight filters should be derived from the available `category` documents.
- The "All" filter should remain a UI-only option and should not become a CMS category.
- Filter navigation should be generated from the content access layer rather than a hardcoded array.
- Active state, button styling, spacing, and interaction remain code-controlled.

## Insights Library

### Insights library copy

Location: `components/insights/insightsInteractive/InsightsBlogPosts.tsx`

Content:

- Section label ("Library · 36 essays")
- Section heading
- Supporting introduction
- Load more CTA

Target model:

`insightsPage`

Notes:

- The section label, heading, and supporting introduction should become CMS-managed.
- The total number of essays should be derived from the available `insight` documents rather than hardcoded.
- The "Load more" CTA label should become a reusable CTA object if shared elsewhere.
- Layout, spacing, typography, grid layout, and responsive behaviour remain code-controlled.

### Insight listing

Source content:

`data/blogData.ts`

Target model:

`insight`

Notes:

- The article listing should be derived from `insight` documents.
- Filtering should operate on the fetched insight collection.
- Pagination or "Load more" behaviour should remain code-controlled.
- The content access layer should provide the insight collection to the component.

### Code controlled components

Components:

- `components/insights/insightsInteractive/BlogPost.tsx`

Notes:

- `BlogPost.tsx` is responsible for rendering the filtered insight collection.
- Client-side filtering, pagination, responsive item counts, and interaction remain code-controlled.
- The component should receive insight data via props rather than importing static data directly.

### Code controlled components

Components:

- `components/insights/insightsInteractive/InsightsInteractive.tsx`
- `components/insights/insightsInteractive/InsightsFilter.tsx`
- `components/insights/insightsInteractive/BlogPost.tsx`
