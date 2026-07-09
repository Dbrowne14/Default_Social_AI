import { defineField, defineType } from "sanity";

export const serviceTag = defineType({
  name: "serviceTag",
  title: "Service tag",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ai",
      title: "AI tag",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

export const serviceOffer = defineType({
  name: "serviceOffer",
  title: "Service offer",
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

export const serviceCallout = defineType({
  name: "serviceCallout",
  title: "Service callout",
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
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const serviceProcessStep = defineType({
  name: "serviceProcessStep",
  title: "Service process step",
  type: "object",
  fields: [
    defineField({
      name: "id",
      title: "ID",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",

  groups: [
    {
      name: "overview",
      title: "Overview",
      default: true,
    },
    {
      name: "content",
      title: "Content",
    },
    {
      name: "process",
      title: "Process",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],

  fields: [
    defineField({
      name: "linkName",
      title: "Link name",
      type: "string",
      group: "overview",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "overview",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Title lines",
      type: "array",
      of: [{ type: "string" }],
      group: "overview",
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      group: "overview",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "serviceTag" }],
      group: "overview",
    }),

    defineField({
      name: "blurb",
      title: "Blurb",
      type: "text",
      rows: 6,
      group: "content",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "aiCallout",
      title: "AI callout",
      type: "serviceCallout",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "offers",
      title: "Offers",
      type: "array",
      of: [{ type: "serviceOffer" }],
      group: "process",
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "processSteps",
      title: "Process steps",
      type: "array",
      of: [{ type: "serviceProcessStep" }],
      group: "process",
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "id",
      title: "ID",
      type: "string",
      group: "settings",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      group: "settings",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "linkName",
      subtitle: "category",
    },
  },
});