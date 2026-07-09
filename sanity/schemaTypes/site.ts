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
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "groupLink",
      title: "Group Link",
      type: "groupLink",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "contact",
      title: "Contact Details",
      type: "contactDetails",
      group: "contact",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "footer",
      title: "Footer",
      type: "footerContent",
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
