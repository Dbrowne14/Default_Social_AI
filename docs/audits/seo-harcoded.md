## Global SEO

### Site config

Location: `lib/seo/site.ts`

Current content:

- Site name
- Site URL
- Default site description

Target model:

`siteSettings`

Notes:

- Site name, canonical URL, and default description should become global CMS-managed settings.
- Page-level SEO should override these defaults where available.
- `siteSettings` should provide fallback SEO values for pages and insights without custom metadata.
- SEO generation logic remains code-controlled.