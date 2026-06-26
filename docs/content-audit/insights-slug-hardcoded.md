# Insights Page

## Insight Article Header

### Article header

Location: `components/insights/insightsPage/InsightsArticleHeader.tsx`

Source content:

`insight`

Target model:

`insight` and `author`

Notes:

- Article title, subject, excerpt, publication date, read time, category, image caption, and slug should be derived from the `insight` model.
- Author information should be derived from the related `author` document.
- Breadcrumb navigation should be generated from the current article data.
- The cover image should eventually be sourced from the `insight` document.
- Layout, typography, spacing, hero treatment, responsive behaviour, and metadata presentation remain code-controlled.

### Code controlled components

Components:

- `components/ui/SingleStatBlock.tsx`
- `components/ui/SocialsFrame.tsx`

Notes:

- Social sharing behaviour remains code-controlled.
- Reading statistics should eventually be generated programmatically where appropriate (for example, calculated reading time or word count).
- Decorative labels such as "Essay" and "Cover image · commissioned illustration" are presentational UI and do not require CMS management.

## Insight Article Prose

### Article prose renderer

Location: `components/insights/insightsPage/InsightsContent/InsightsArticleProse.tsx`

Source content:

`insight`

Target model:

`insight`

Mapped fields:

- `insight.intro`
- `insight.pullQuotes`
- `insight.sections`
- `insight.tags`

Notes:

- Article body content should be derived from the `insight` model.
- Intro paragraphs should remain structured content for the initial CMS migration.
- Pull quotes should remain structured objects within the article.
- Article sections should remain structured objects with number, kicker, title, and paragraphs.
- Tags should be derived from the article taxonomy rather than hardcoded in the component.
- The component should remain a presentational renderer for article body content.
- Typography, first-letter styling, pull quote styling, section dividers, conclusion treatment, tag pill styling, and spacing remain code-controlled.
- No separate CMS model is required for this component.

## Insight Article Rail

### Article table of contents

Location: `components/insights/insightsPage/InsightsArticleRail.tsx`

Source content:

`insight.sections`

Target model:

`insight`

Notes:

- The table of contents should be generated from the article's section structure.
- Navigation labels should be derived from each section's `kicker`.
- Section numbering should be derived from each section's `number`.
- The component should not maintain a separate navigation data source.
- Active section highlighting should remain driven by the current scroll position.
- Scroll observation, sticky positioning, active state, typography, spacing, and responsive behaviour remain code-controlled.

### Code controlled behaviour

Components:

- `components/insights/insightsPage/InsightsArticleRail.tsx`

Notes:

- Intersection Observer logic remains code-controlled.
- Active section tracking remains client-side.
- Smooth scrolling and anchor navigation remain code-controlled.
- The rail should receive article data via props rather than importing static data.

## Related Insights

### Related article section

Location: `components/insights/insightsPage/InsightsArticleRelated.tsx`

Content:

- Eyebrow ("Keep reading")
- Section heading
- Supporting paragraph
- Related article cards
- CTA ("All insights")

Target model:

`insight`

Notes:

- Related article cards should be derived from `insight` documents.
- Related article logic should live in the content access layer.
- The current article should be excluded from related results.
- Related content should preferably use manual picks first, then fall back to matching category/tag.
- The CTA label and destination can use a reusable CTA object if shared elsewhere.
- `BlogCard` remains a reusable presentational component.
- Layout, spacing, card grid, typography, and responsive behaviour remain code-controlled.

### Related article logic

Source content:

`data/blogData.ts`

Target model:

`insight`

Notes:

- Related articles should come from the `insight` collection.
- The supporting paragraph should avoid hardcoded article-specific copy.
- Current text includes bespoke wording about "the concierge", which may not suit every article.
- Better future copy should be generic or CMS-managed per article/category.

### Code controlled components

Components:

- `components/insights/insightsPage/InsightsContent/InsightsArticleBody.tsx`