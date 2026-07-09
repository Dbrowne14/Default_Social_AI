import { defineField, defineType } from "sanity";
import { ComposeIcon } from "@sanity/icons";

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
  icon: ComposeIcon,

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
      description:
        "Enable to feature this article in highlighted areas of the site.",
      group: "settings",
      initialValue: false,
    }),

    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
      description: "Short subject line used in article headers and previews.",
      group: "card",
    }),

    defineField({
      name: "date",
      title: "Date",
      type: "date",
      group: "meta",
      validation: (Rule) =>
        Rule.required().error("Add the date before publishing."),
    }),

    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      description:
        "Primary category label shown on article cards and the article page.",
      group: "meta",
      validation: (Rule) =>
        Rule.required().error("Add the category tag before publishing."),
    }),

    defineField({
      name: "allTags",
      title: "All Tags",
      type: "array",
      of: [{ type: "string" }],
      description:
        "All tags associated with this article. Used for filtering and related content.",
      group: "meta",
      validation: (Rule) =>
        Rule.required().min(1).error("Add at least one tag for this post."),
    }),

    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: "Estimated reading time, for example '6 min read'.",
      group: "meta",
      validation: (Rule) =>
        Rule.required().error("Add the read time before publishing."),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "card",
      validation: (Rule) =>
        Rule.required().error("Add the title before publishing."),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description:
        "Short summary used on article cards and metadata. Aim for 140–160 characters.",
      group: "card",
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "person" }],
      group: "meta",
      validation: (Rule) =>
        Rule.required().error("Add the author details before publishing."),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "URL-friendly slug generated from the title. Avoid changing after publishing.",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error("Add the slug before publishing."),
    }),

    defineField({
      name: "imageCaption",
      title: "Image Caption",
      type: "string",
      description:
        "Optional caption displayed with the article image or visual treatment.",
      group: "card",
    }),

    defineField({
      name: "intro",
      title: "Intro",
      type: "array",
      of: [{ type: "insightTextBlock" }],
      description: "Opening article content before the main numbered sections.",
      group: "content",
    }),

    defineField({
      name: "pullQuotes",
      title: "Pull Quotes",
      type: "array",
      of: [{ type: "pullQuote" }],
      description:
        "Optional highlighted quotes used within the article layout.",
      group: "content",
    }),

    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "insightSection" }],
      description: "Main body sections of the article.",
      group: "content",
    }),
  ],
  orderings: [
    {
      title: "Publish Date (Newest First)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      tag: "tag",
      featured: "featured",
    },
    prepare({ title, tag, featured }) {
      return {
        title,
        subtitle: featured ? `⭐ ${tag}` : tag,
      };
    },
  },
});
