import { defineType, defineField } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({
      name: "servicesHeader",
      title: "Services Header",
      type: "pageHeading",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "pageCTA",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
