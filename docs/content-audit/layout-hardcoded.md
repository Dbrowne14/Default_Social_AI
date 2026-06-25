## Navigation

### Assessment

The navigation consists primarily of application routing and branding.

### Decision

The following remain code-controlled:

- Brand name
- Default Media Group logo
- Primary navigation
- Route configuration
- Navigation layout
- Navigation behaviour

No dedicated Sanity schema is required.

The only future consideration would be storing global branding assets (logo, favicon, etc.) in `siteSettings` if editor-controlled branding becomes a requirement.

## `components/layout/footer/Footer.tsx`

### Current purpose

Renders the global site footer, including brand identity, practice links, explore links, contact details, and footer metadata.

### Current hardcoded content

- Brand display: `default/social`
- Footer eyebrow: `AI-enabled studio`
- Footer description
- Explore links
- Contact email
- Phone number
- Location
- Default Media Group external link
- Copyright line
- Build stack line

---

## Target content model

### Future content ownership

The footer should remain primarily code-controlled, with selected global content moved into `siteSettings`.

### Proposed global model

```ts
SiteSettings {
  contact: ContactDetails;
  footer: FooterContent;
}
```

```ts
ContactDetails {
  email: string;
  phone: string;
  location: string;
}
```

```ts
FooterContent {
  eyebrow: string;
  description: string;
  groupLink: Link;
}
```

```ts
Link {
  label: string;
  href: string;
  external?: boolean;
}
```

---

## CMS assessment

### CMS-managed

- Contact email
- Phone number
- Location
- Footer eyebrow
- Footer description
- Default Media Group link

### Derived from content

- Practice links should be generated from `service` content using `service.linkName`.

### Code-controlled

- Footer layout
- Large brand text
- Gradients
- Hover states
- Column headings if they remain fixed
- Explore links if route structure remains fixed
- Copyright format
- Build stack line

---

## Notes

- The footer does not need to become a full CMS-managed section.
- Contact information should be stored globally because it may appear in multiple places.
- Practice links should not be duplicated in footer-specific data; they should be derived from the `service` model.
- Branding and layout should remain code-controlled.
- If editors later need to manage footer navigation, this can be added to `siteSettings`, but it is not required for the initial CMS migration.