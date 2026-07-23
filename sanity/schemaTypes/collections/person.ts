import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  icon: UserIcon,
  groups: [
    {
      name: "card",
      title: "Card",
      default: true,
    },
    {
      name: "profile",
      title: "Bio Page",
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "card",
      validation: (Rule) =>
        Rule.required().error("Add the persons name before publishing."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly slug used for the person's bio page.",
      group: "card",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error("Add the slug before publishing."),
    }),
    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
      description: "Displayed in the placeholder avatar, for example RM.",
      group: "card",
      validation: (Rule) =>
        Rule.required().error("Add the initials for the placeholder avatar."),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      description:
        "Optional portrait. Falls back to the initials placeholder when empty.",
      group: "card",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "Job title or role shown below the person's name.",
      group: "card",
      validation: (Rule) =>
        Rule.required().error("Add the person's role before publishing."),
    }),
    defineField({
      name: "keyPerson",
      title: "Key Person",
      type: "boolean",
      description:
        "Enable to feature this person more prominently on the site.",
      group: "card",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls display order. Lower numbers appear first.",
      group: "card",
    }),

    defineField({
      name: "pronouns",
      title: "Pronouns",
      type: "string",
      description: "For example 'He / Him'.",
      group: "profile",
    }),
    defineField({
      name: "focusArea",
      title: "Focus Area",
      type: "string",
      description: "Short descriptor shown next to pronouns, for example 'Practice lead'.",
      group: "profile",
    }),
    defineField({
      name: "discipline",
      title: "Discipline",
      type: "string",
      description: "Shown in the bio page fact strip, for example 'Engineering'.",
      group: "profile",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Where the person is based, for example 'Brentford'.",
      group: "profile",
    }),
    defineField({
      name: "joinedYear",
      title: "Joined Year",
      type: "string",
      description: "Year they joined the studio, for example '2018'.",
      group: "profile",
    }),
    defineField({
      name: "lede",
      title: "Lede",
      type: "text",
      rows: 3,
      description: "Short intro paragraph shown in the bio page hero.",
      group: "profile",
    }),
    defineField({
      name: "bioHeading",
      title: "Bio Heading",
      type: "string",
      description: "Large statement heading in the bio section.",
      group: "profile",
    }),
    defineField({
      name: "bioParagraphs",
      title: "Bio Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      description: "Body paragraphs for the bio section.",
      group: "profile",
    }),
    defineField({
      name: "expertise",
      title: "Expertise",
      type: "array",
      of: [{ type: "string" }],
      description: "Short skill or focus chips, for example 'Next.js'.",
      group: "profile",
    }),
    defineField({
      name: "quote",
      title: "Pull Quote",
      type: "text",
      rows: 3,
      group: "profile",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "profile",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
      group: "profile",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
  },
});
