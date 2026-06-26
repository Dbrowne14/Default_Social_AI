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