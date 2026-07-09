import { defineField, defineType } from "sanity";

export const linkItem = defineType({
  name: "linkItem",
  title: "Link Item",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Href",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "external",
      title: "External Link",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

//for use in flattened object structures
export const linkItemFlattened = [
  defineField({
    name: "label",
    title: "Label",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "href",
    title: "Href",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "external",
    title: "External Link",
    type: "boolean",
    initialValue: false,
  }),
];

export const titleDescription = defineType({
  name: "titleDescription",
  title: "Title Description",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const titleSegment = defineType({
  name: "titleSegment",
  title: "Title Segment",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "italic",
      title: "Italic",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "accent",
      title: "Accent",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

export const titleLine = defineType({
  name: "titleLine",
  title: "Title Line",
  type: "object",
  fields: [
    defineField({
      name: "segments",
      title: "Segments",
      type: "array",
      of: [{ type: "titleSegment" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

export const sectionIntro = defineType({
  name: "sectionIntro",
  title: "Section Intro",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "array",
      of: [{ type: "titleLine" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "meta",
      title: "Meta",
      type: "text",
      rows: 3,
    }),
  ],
});

//for use in flattened object structures
export const sectionIntroFlattened = [
  defineField({
    name: "eyebrow",
    title: "Eyebrow",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "title",
    title: "Title",
    type: "array",
    of: [{ type: "titleLine" }],
    validation: (Rule) => Rule.required().min(1),
  }),
  defineField({
    name: "meta",
    title: "Meta",
    type: "text",
    rows: 3,
  }),
];

export const pageHeading = defineType({
  name: "pageHeading",
  title: "Page Heading",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "array",
      of: [{ type: "titleLine" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "lede",
      title: "Lede",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

//for use in flattened object structures
export const pageHeadingFlattened = [
  defineField({
    name: "eyebrow",
    title: "Eyebrow",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "title",
    title: "Title",
    type: "array",
    of: [{ type: "titleLine" }],
    validation: (Rule) => Rule.required().min(1),
  }),
  defineField({
    name: "lede",
    title: "Lede",
    type: "text",
    rows: 4,
    validation: (Rule) => Rule.required(),
  }),
];

export const pageCTA = defineType({
  name: "pageCTA",
  title: "Page CTA",
  type: "object",
  fields: [
    defineField({
      name: "primaryText",
      title: "Primary Text",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "secondaryText",
      title: "Secondary Text",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "linkItem",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

export const metaDetails = defineType({
  name: "metaDetails",
  title: "Meta Details",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Meta Title",
      type: "string",
      description: "Used for browser tabs and search results.",
      validation: (Rule) =>
        Rule.max(60).warning("Meta titles are usually best under 60 characters."),
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "Used for search engines and link previews. Aim for 140–160 characters.",
      validation: (Rule) =>
        Rule.max(160).warning("Meta descriptions are usually best under 160 characters."),
    }),
  ],
});