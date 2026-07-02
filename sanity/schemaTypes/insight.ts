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
  fields: [
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "allTags",
      title: "All Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "person" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
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
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "array",
      of: [{ type: "insightTextBlock" }],
    }),
    defineField({
      name: "pullQuotes",
      title: "Pull Quotes",
      type: "array",
      of: [{ type: "pullQuote" }],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "insightSection" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tag",
    },
  },
});
