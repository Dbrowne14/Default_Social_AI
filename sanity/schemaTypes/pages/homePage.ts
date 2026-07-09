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

  groups: [
    {
      name: "hero",
      title: "Hero",
      default: true,
    },
    {
      name: "sections",
      title: "Page Sections",
    },
    {
      name: "contact",
      title: "Contact",
    },
  ],

  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "homeHero",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "valueProp",
      title: "Value Prop",
      type: "pageHeading",
      group: "sections",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "servicesOverview",
      title: "Services Overview",
      type: "sectionIntro",
      group: "sections",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "aboutOverview",
      title: "About Overview",
      type: "aboutOverviewSection",
      group: "sections",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "insightsOverview",
      title: "Insights Overview",
      type: "sectionIntro",
      group: "sections",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "contactFormOverview",
      title: "Contact Form Overview",
      type: "sectionIntro",
      group: "contact",
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