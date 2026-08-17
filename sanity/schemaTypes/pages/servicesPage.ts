import { defineType, defineField } from "sanity";
import { ControlsIcon } from "@sanity/icons";

export const waysOfWorkingModel = defineType({
  name: "waysOfWorkingModel",
  title: "Engagement model",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'e.g. "Full Service", "Strategy", "Creative".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "proposition",
      title: "Proposition",
      type: "string",
      description: 'Short italic statement, e.g. "Turning insight into action."',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "capabilities",
      title: "Capabilities",
      type: "array",
      of: [{ type: "string" }],
      description: 'Shown under "Capabilities can include".',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "practices",
      title: "Practices this model draws on",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
      description:
        "Select which of the five practices this engagement model draws on. Drives the DRAWS ON indicator on the frontend.",
      validation: (Rule) => Rule.required().min(1).unique(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "proposition",
    },
  },
});

export const waysOfWorkingSection = defineType({
  name: "waysOfWorkingSection",
  title: "Ways of Working",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Headline",
      type: "array",
      of: [{ type: "titleLine" }],
      description:
        'Use the italic + accent segment flags for the emphasised word (e.g. "work").',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "array",
      of: [{ type: "titleLine" }],
      description:
        'Supporting paragraph, as a single line of segments. Use the italic flag on the "Default Social" segment. Include surrounding spaces in the plain-text segments so words don\'t run together.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "practicesStatement",
      title: "Shared practices statement",
      type: "string",
      description: 'e.g. "All three draw on the same five practices".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "models",
      title: "Engagement models",
      type: "array",
      of: [{ type: "waysOfWorkingModel" }],
      description: "The three ways of working. Displayed in this order.",
      validation: (Rule) => Rule.required().min(3).max(3),
    }),
  ],
});

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
      name: "waysOfWorking",
      title: "Ways of Working",
      type: "waysOfWorkingSection",
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
