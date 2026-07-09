import { defineField, defineType } from "sanity";
import { ControlsIcon } from "@sanity/icons";

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
  icon: ControlsIcon,

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
      description:
        "Short name used for links, anchors, and navigation-style labels.",
      group: "overview",
      validation: (Rule) =>
        Rule.required().error(
          "Add a link name before publishing this service.",
        ),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Service category shown in previews and page sections.",
      group: "overview",
      validation: (Rule) =>
        Rule.required().error("Add a category before publishing this service."),
    }),

    defineField({
      name: "title",
      title: "Title lines",
      type: "array",
      of: [{ type: "string" }],
      group: "overview",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error("Add at least one title line for this service."),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "Short overview used near the top of the service section.",
      group: "overview",
      validation: (Rule) =>
        Rule.required().error(
          "Add a short service description before publishing.",
        ),
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "serviceTag" }],
      description: "Small labels shown alongside the service.",
      group: "overview",
    }),

    defineField({
      name: "blurb",
      title: "Blurb",
      type: "text",
      rows: 6,
      description: "Longer explanatory copy for this service.",
      group: "content",
      validation: (Rule) =>
        Rule.required().error("Add the main service blurb before publishing."),
    }),

    defineField({
      name: "aiCallout",
      title: "AI callout",
      type: "serviceCallout",
      description: "Highlighted AI-related callout for this service.",
      group: "content",
      validation: (Rule) =>
        Rule.required().error(
          "Add the AI callout before publishing this service.",
        ),
    }),

    defineField({
      name: "offers",
      title: "Offers",
      type: "array",
      of: [{ type: "serviceOffer" }],
      description: "Specific offers or deliverables included in this service.",
      group: "process",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error("Add at least one offer for this service."),
    }),

    defineField({
      name: "processSteps",
      title: "Process steps",
      type: "array",
      of: [{ type: "serviceProcessStep" }],
      description: "Steps explaining how this service is delivered.",
      group: "process",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error("Add at least one process step for this service."),
    }),

    defineField({
      name: "id",
      title: "ID",
      type: "string",
      description:
        "Internal stable identifier used by the frontend. Avoid changing once set.",
      group: "settings",
      validation: (Rule) =>
        Rule.required().error(
          "Add a stable internal ID before publishing this service.",
        ),
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description:
        "Enable to feature this service in highlighted homepage sections.",
      group: "settings",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Link Name",
      name: "linkName",
      by: [{ field: "linkName", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "linkName",
      subtitle: "category",
    },
  },
});
