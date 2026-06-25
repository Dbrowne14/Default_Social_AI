# Content Audit

## `data/blogData.ts`

### Current type

`BlogPostProps`

### Current purpose

Stores insight/article content for the Insights listing and individual article pages.

### Current object shape

```ts
BlogPostProps {
  featured?: boolean
  subject?: string
  date: string
  tag: string
  allTags?: string[]
  readTime: string
  title: string
  excerpt?: string
  authorInitials?: string
  author: string
  authorRole?: string
  slug: string
  imageCaption?: string
  intro?: Text[]
  pullQuotes?: PullQuotes[]
  sections?: SectionProps[]
}

---

## Target content model

### Future content entity

`Insight`

### Classification

- Reusable editorial entity
- CMS-managed document

### Proposed object shape

```ts
Insight {
  featured?: boolean
  subject?: string
  publishedDate: string
  primaryTag: string
  tags: string[]
  readTime: string
  title: string
  excerpt: string
  author: Author
  slug: string
  imageCaption?: string
  intro: ArticleTextBlock[]
  pullQuotes?: PullQuote[]
  sections: ArticleSection[]
  seo?: SEO
}
```

### Related content models

#### Author

```ts
Author {
  name: string
  role: string
  initials: string
}
```

#### ArticleTextBlock

```ts
ArticleTextBlock {
  text?: string
  superText?: string
}
```

#### PullQuote

```ts
PullQuote {
  quote: string
  cite?: string
}
```

#### ArticleSection

```ts
ArticleSection {
  number: string
  kicker: string
  title: string
  paragraphs: ArticleTextBlock[]
}
```

### Planned model changes

| Current | Proposed |
|---------|----------|
| `BlogPostProps` | `Insight` |
| `date` | `publishedDate` |
| `tag` | `primaryTag` |
| `allTags` | `tags` |
| `author`, `authorRole`, `authorInitials` | `Author` document/reference |
| Structured article body | Keep structured for Phase 3 |
| SEO | Add dedicated `SEO` object |

### Notes

- Preserve the current editorial article structure.
- Do not migrate to Portable Text during the initial CMS migration.
- Author information should become reusable across multiple insights.
- Primary tag and additional tags should remain distinct concepts.
- Final implementation decisions will be made during the Sanity schema phase.

---

## `data/companyInfo.ts`

### Current type

```ts
companyInfo: {
  label: string;
  value: string;
}[]
```

### Current purpose

Stores key company facts displayed on the About page.

### Current object shape

```ts
{
  label: string;
  value: string;
}
```

---

### Target content model

#### Future content object

`CompanyFact`

#### Classification

- Reusable content object
- Page content (About page)

#### Proposed object shape

```ts
CompanyFact {
  label: string;
  value: string;
}
```

#### Proposed page model

```ts
AboutPage {
  companyFacts: CompanyFact[];
}
```

### Planned model changes

| Current | Proposed |
|---------|----------|
| Anonymous object | `CompanyFact` |
| `companyInfo` | `companyFacts` |

### Notes

- No structural changes required.
- Current data model is already suitable for CMS migration.
- Rename the object for clarity and consistency with other content models.