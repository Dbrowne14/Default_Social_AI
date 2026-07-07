import { defineType, defineField } from "sanity";

export const insightsPage = defineType({
  name: "insightsPage",
  title: "Insights Page",
  type: "document",
  fields: [
    defineField({
      name: "insightsHeader",
      title: "Insights Header",
      type: "pageHeading",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Insights Page",
      };
    },
  },
});
