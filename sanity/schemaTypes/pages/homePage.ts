import { defineType, defineField } from "sanity";
import { sectionIntroFlattened } from "../shared";

export const aboutOverviewSection = defineType({
  name: "aboutOverviewSection",
  title: "About Overview Section",
  type: "object",
  fields: [
    ...sectionIntroFlattened,
    defineField({
      name: "keyPeople",
      title: "Key People",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Label",
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
    }),
  ],
});

export const homeHero = defineType({
  name: "homeHero",
  title: "Home Hero",
  type: "object",
  fields: [
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "homeHero",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "valueProp",
      title: "Value Prop",
      type: "pageHeading",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "servicesOverview",
      title: "Services Overview",
      type: "sectionIntro",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutOverview",
      title: "About Overview",
      type: "aboutOverviewSection",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "insightsOverview",
      title: "Insights Overview",
      type: "sectionIntro",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contactFormOverview",
      title: "Contact Form Overview",
      type: "sectionIntro",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  },
});
