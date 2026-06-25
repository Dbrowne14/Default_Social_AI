# Default Social Content Model Plan

## Source audit

### Static data files

- `data/ServicesDetails.ts`
- `data/blogData.ts`
- `data/companInfo.ts`
- `data/navData.ts`
- `data/teamData.ts`

### Likely hardcoded content areas

- Home page sections
- About page sections
- Services landing copy
- Insights landing copy
- Footer content
- Navigation labels
- CTA copy
- Contact section copy
- Article template copy

---

## Entity mapping

| Current source | Future Sanity model |
|---|---|
| `ServicesDetails.ts` | `service` |
| `blogData.ts` | `insight`, `author`, `category` |
| `companInfo.ts` | `siteSettings`, `page`, `stat`, `cta` |
| `navData.ts` | `navigationItem`, `siteSettings` |
| `teamData.ts` | `teamMember` |

---

## CMS-managed

- Services
- Insights
- Authors
- Categories
- Team members
- Navigation
- Footer
- SEO
- Contact details
- Page intro copy
- CTA copy

## Code-controlled

- Layout
- Animation
- Responsive behaviour
- Tailwind styling
- Component structure
- Route structure
- Form behaviour