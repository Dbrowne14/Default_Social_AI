import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const client = defineType({
  name: "client",
  title: "Client",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description:
        "Client name. Also used as the accessible alt text for the logo.",
      validation: (Rule) =>
        Rule.required().error("Add the client name before publishing."),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Client logo shown in the selected-clients strip.",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error("Add the client logo before publishing."),
    }),
    defineField({
      name: "url",
      title: "Website",
      type: "url",
      description: "Optional client website.",
    }),
    defineField({
      name: "sector",
      title: "Sector",
      type: "string",
      description: "Optional industry or category label.",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls display order. Lower numbers appear first.",
      validation: (Rule) => Rule.integer(),
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
      subtitle: "sector",
      media: "logo",
    },
  },
});
