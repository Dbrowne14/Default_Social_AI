import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Add the persons name before publishing."),
    }),
    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
      description: "Displayed in the placeholder avatar, for example RM.",
      validation: (Rule) =>
        Rule.required().error("Add the initials for the placeholder avatar."),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "Job title or role shown below the person's name.",
      validation: (Rule) =>
        Rule.required().error("Add the person's role before publishing."),
    }),
    defineField({
      name: "keyPerson",
      title: "Key Person",
      type: "boolean",
      description:
        "Enable to feature this person more prominently on the site.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls display order. Lower numbers appear first.",
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
      subtitle: "_id",
    },
  },
});
