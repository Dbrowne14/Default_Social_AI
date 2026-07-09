import { defineField, defineType } from "sanity";

export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
      description: "Displayed in the placeholder avatar, for example RM.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "Job title or role shown below the person's name.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "keyPerson",
      title: "Key Person",
      type: "boolean",
      description: "Enable to feature this person more prominently on the site."
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls display order. Lower numbers appear first."
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "_id",
    },
  },
});
