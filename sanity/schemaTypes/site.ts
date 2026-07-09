import { linkItemFlattened } from "./shared";
import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  groups: [
    {
      name: "general",
      title: "General",
      default: true,
    },
    {
      name: "contact",
      title: "Contact",
    },
    {
      name: "footer",
      title: "Footer",
    },
  ],

  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      description:
        "Used as the default site name in metadata and shared layout content.",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "string",
      description:
        "Canonical production URL for the site, for example https://defaultsocial.co.uk.",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description:
        "Default site description used for SEO and fallback metadata.",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "groupLink",
      title: "Group Link",
      type: "groupLink",
      description:
        "Link to the wider Default Media Group site or related group page.",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "contact",
      title: "Contact Details",
      type: "contactDetails",
      description: "Shared contact details used across the site.",
      group: "contact",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "footer",
      title: "Footer",
      type: "footerContent",
      description: "Content displayed in the global footer.",
      group: "footer",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const contactDetails = defineType({
  name: "contactDetails",
  title: "Contact Details",
  type: "object",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const footerContent = defineType({
  name: "footerContent",
  title: "Footer Content",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const groupLink = defineType({
  name: "groupLink",
  title: "Group Link",
  type: "object",
  fields: [
    ...linkItemFlattened,
    defineField({
      name: "src",
      title: "Src",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
