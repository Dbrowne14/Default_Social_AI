import { defineType, defineField } from "sanity";
import { ControlsIcon } from "@sanity/icons";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  icon: ControlsIcon,
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
  preview: {
    prepare() {
      return {
        title: "Services Page",
      };
    },
  },
});
