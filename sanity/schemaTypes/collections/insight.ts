import { defineField, defineType } from "sanity";

export const insightTextBlock = defineType({
  name: "insightTextBlock",
  title: "Insight Text Block",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "superText",
      title: "Super Text",
      type: "string",
    }),
  ],
});

export const pullQuote = defineType({
  name: "pullQuote",
  title: "Pull Quote",
  type: "object",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "cite",
      title: "Cite",
      type: "string",
    }),
  ],
});

export const insightSection = defineType({
  name: "insightSection",
  title: "Insight Section",
  type: "object",
  fields: [
    defineField({
      name: "number",
      title: "Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kicker",
      title: "Kicker",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "insightTextBlock" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

export const insight = defineType({
  name: "insight",
  title: "Insight",
  type: "document",

  groups: [
    {
      name: "card",
      title: "Card",
      default: true,
    },
    {
      name: "meta",
      title: "Meta",
    },
    {
      name: "content",
      title: "Article Content",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],

  fields: [
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      group: "settings",
      initialValue: false,
    }),

    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
      group: "card",
    }),

    defineField({
      name: "date",
      title: "Date",
      type: "date",
      group: "meta",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      group: "meta",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "allTags",
      title: "All Tags",
      type: "array",
      of: [{ type: "string" }],
      group: "meta",
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      group: "meta",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "card",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "card",
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "person" }],
      group: "meta",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "imageCaption",
      title: "Image Caption",
      type: "string",
      group: "card",
    }),

    defineField({
      name: "intro",
      title: "Intro",
      type: "array",
      of: [{ type: "insightTextBlock" }],
      group: "content",
    }),

    defineField({
      name: "pullQuotes",
      title: "Pull Quotes",
      type: "array",
      of: [{ type: "pullQuote" }],
      group: "content",
    }),

    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "insightSection" }],
      group: "content",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "tag",
    },
  },
});