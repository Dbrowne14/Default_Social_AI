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
      description: "Main hero section at the top of the homepage.",
      group: "hero",
      validation: (Rule) => Rule.required().error("Add the main hero text before publishing."),
    }),

    defineField({
      name: "valueProp",
      title: "Value Prop",
      type: "pageHeading",
      description: "Introductory value statement shown below the hero.",
      group: "sections",
      validation: (Rule) => Rule.required().error("Add the value proposition before publishing."),
    }),

    defineField({
      name: "servicesOverview",
      title: "Services Overview",
      type: "sectionIntro",
      description: "Intro content for the services section on the homepage.",
      group: "sections",
      validation: (Rule) => Rule.required().error("Add the intro content before publishing."),
    }),

    defineField({
      name: "aboutOverview",
      title: "About Overview",
      type: "aboutOverviewSection",
      description: "Homepage section introducing Default Social / Default Media Group.",
      group: "sections",
      validation: (Rule) => Rule.required().error("Add the about overview before publishing."),
    }),

    defineField({
      name: "insightsOverview",
      title: "Insights Overview",
      type: "sectionIntro",
      description: "Intro content for the insights section on the homepage.",
      group: "sections",
      validation: (Rule) => Rule.required().error("Add the insights overview before publishing."),
    }),

    defineField({
      name: "contactFormOverview",
      title: "Contact Form Overview",
      type: "sectionIntro",
      description: "Intro content shown above the contact form.",
      group: "contact",
      validation: (Rule) => Rule.required().error("Add the contact form overview before publishing."),
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