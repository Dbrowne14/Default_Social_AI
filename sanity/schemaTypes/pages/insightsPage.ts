import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const insightsPage = defineType({
  name: "insightsPage",
  title: "Insights Page",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "insightsHeader",
      title: "Insights Header",
      type: "pageHeading",
      validation: (Rule) =>
        Rule.required().error("Add the insights header before publishing."),
    }),
    defineField({
      name: "articlesIntro",
      title: "Articles Intro",
      type: "sectionIntro",
      description:
        "Compact heading shown above the featured article and library, e.g. \"Articles & case studies.\"",
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
