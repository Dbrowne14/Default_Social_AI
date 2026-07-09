import { defineField, defineType } from "sanity";
import { pageHeadingFlattened, sectionIntroFlattened } from "../shared";

export const companyInformation = defineType({
  name: "companyInformation",
  title: "Company Information",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const aboutHeader = defineType({
  name: "aboutHeader",
  title: "About Header",
  type: "object",
  fields: [
    ...pageHeadingFlattened,
    defineField({
      name: "companyInfo",
      title: "Company Info",
      type: "array",
      of: [{ type: "companyInformation" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

export const valuesCallout = defineType({
  name: "valuesCallout",
  title: "Values Callout",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "statement",
      title: "Statement",
      type: "array",
      of: [{ type: "titleLine" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

export const valuesSection = defineType({
  name: "valuesSection",
  title: "Values Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "statement",
      title: "Statement",
      type: "array",
      of: [{ type: "titleLine" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "callout",
      title: "Callout",
      type: "valuesCallout",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const groupStructureEntry = defineType({
  name: "groupStructureEntry",
  title: "Group Structure Entry",
  type: "object",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Parent", value: "parent" },
          { title: "Self", value: "self" },
          { title: "Sibling", value: "sibling" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
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
});

export const groupStructureSection = defineType({
  name: "groupStructureSection",
  title: "Group Structure Section",
  type: "object",
  fields: [
    ...sectionIntroFlattened,
    defineField({
      name: "entries",
      title: "Entries",
      type: "array",
      of: [{ type: "groupStructureEntry" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "closingStatement",
      title: "Closing Statement",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const approachPrinciple = defineType({
  name: "approachPrinciple",
  title: "Approach Principle",
  type: "object",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
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
});

export const approachSection = defineType({
  name: "approachSection",
  title: "Approach Section",
  type: "object",
  fields: [
    ...sectionIntroFlattened,
    defineField({
      name: "statement",
      title: "Statement",
      type: "array",
      of: [{ type: "titleLine" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "principles",
      title: "Principles",
      type: "array",
      of: [{ type: "approachPrinciple" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",

  groups: [
    {
      name: "hero",
      title: "Hero",
      default: true,
    },
    {
      name: "content",
      title: "Content",
    },
    {
      name: "team",
      title: "Team",
    },
    {
      name: "cta",
      title: "Call to Action",
    },
  ],

  fields: [
    defineField({
      name: "aboutHeader",
      title: "About Header",
      type: "aboutHeader",
      description: "Main heading and intro content for the About page.",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "values",
      title: "Values",
      type: "valuesSection",
      description: "Values section explaining the principles behind the business.",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "groupStructure",
      title: "Group Structure",
      type: "groupStructureSection",
      description: "Section explaining how Default Social fits within the wider group.",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "approach",
      title: "Approach",
      type: "approachSection",
      description: "Section explaining the company approach and working style.",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "team",
      title: "Team",
      type: "sectionIntro",
      description: "Intro content shown above the team members.",
      group: "team",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "cta",
      title: "CTA",
      type: "pageCTA",
      description: "Final call-to-action section at the bottom of the About page.",
      group: "cta",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "About Page",
      };
    },
  },
});
