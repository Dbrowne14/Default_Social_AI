import type { AboutPage } from "@/types/aboutPage";

export const aboutPage: AboutPage = {
  aboutHeader: {
    eyebrow: "About",

    title: [
      {
        segments: [{ text: "A studio" }],
      },
      {
        segments: [{ text: "between" }],
      },
      {
        segments: [
          {
            text: "signal",
            accent: true,
            italic: true,
          },
        ],
      },
      {
        segments: [{ text: "and craft." }],
      },
    ],

    lede: "Default Social is the digital, social and technology arm of the Default Media Group — a 10-year-old company with one studio in Brentford, one foot in the data, and both eyes on what's next.",
    companyInfo: [
      {
        label: "Founded",
        value: "2016 · As part of Default Media Group",
      },
      {
        label: "HQ",
        value: "Brentford, London",
      },
      {
        label: "Team",
        value: "31 across 5 practices",
      },
      {
        label: "Group sibling",
        value: "Default Media · Default Studios",
      },
      {
        label: "AI practice",
        value: "Operational since 2025",
      },
    ],
  },
  values: {
    eyebrow: "01 · Why we exist",

    statement: [
      {
        segments: [
          {
            text: "We started Default Social because the agency model was built for a quieter market — and the market got ",
          },
          {
            text: "much louder.",
            italic: true,
            accent: true,
          },
        ],
      },
    ],

    intro:
      "The old playbook broke when channels, tools and expectations all started moving at once.",

    body: [
      "Slower briefs, longer cycles, fewer channels: that was the world the old playbook was written for. Today's brands need a partner who moves at the speed of the feed, but thinks at the depth of the boardroom — and most can't do both halves of the job at once.",

      "We sit inside the Default Media Group because the work we do — marketing, technology, creative, AI — is too entangled to be split across four agencies. We want one team you can call when you don't yet know if the answer is a campaign, a product, a content engine, or a strategy reset.",
    ],

    callout: {
      eyebrow: "What we're really after",

      statement: [
        {
          segments: [
            {
              text: "Work that looks ",
            },
            {
              text: "obvious in hindsight",
              italic: true,
              accent: true,
            },
            {
              text: " — where, a year later, you can't believe the brand ever did it any other way.",
            },
          ],
        },
      ],
    },
  },
  groupStructure: {
    eyebrow: "02 · Our place in the group",

    title: [
      {
        segments: [{ text: "Part of Default" }],
      },
      {
        segments: [{ text: "Media Group." }],
      },
    ],

    meta: "We're one of three sibling studios inside Default Media Group — each independent, but networked through a shared operating spine, shared AI tooling, and a shared address in Brentford.",

    entries: [
      {
        type: "parent",
        label: "Group",
        name: "Default Media Group",
        description:
          "A privately-held media, marketing and technology group founded in 2016. Three sibling studios operate beneath one shared spine of finance, AI, data and people.",
      },
      {
        type: "self",
        label: "▍ This studio",
        name: "Default Social",
        description:
          "Digital, social, technology & AI. Web builds, SEO, social systems, viral campaign IP, marketing strategy, AI integration.",
      },
      {
        type: "sibling",
        label: "Sibling",
        name: "Default Media",
        description:
          "Above-the-line media planning, partnerships, sponsorships and broadcast — the group's traditional media engine.",
      },
      {
        type: "sibling",
        label: "Sibling",
        name: "Default Mgt",
        description:
          "Artist and talent management — building careers, securing partnerships and creating opportunities for creators, presenters and personalities across modern media.",
      },
    ],

    closingStatement:
      "When a client engages Default Social, they get our studio on the front line — and the group's full operating depth standing behind it. One brief, one team, four houses' worth of muscle.",
  },
  approach: {
    eyebrow: "04 · Approach",

    title: [
      {
        segments: [{ text: "An innovation" }],
      },
      {
        segments: [{ text: "mindset, on rails." }],
      },
    ],

    meta: "",

    statement: [
      {
        segments: [
          {
            text: "Innovation",
            italic: true,
            accent: true,
          },
          {
            text: " is overused...",
          },
        ],
      },
      {
        segments: [
          {
            text: "Here's what it actually means inside our studio.",
          },
        ],
      },
    ],

    principles: [
      {
        id: "i",
        title: "Hypothesis-led",
        description:
          "Every engagement opens with a written hypothesis — what we believe will move the metric, and why. It's the document the strategist defends in week one, and the document we score against in week twelve.",
      },
      {
        id: "ii",
        title: "Modular AI from day one",
        description:
          "The AI layer is never bolted on at the end. It's chosen at brief — concierge, content engine, predictive scoring, personalisation — and wired into the architecture so each module can evolve independently.",
      },
      {
        id: "iii",
        title: "Shipping over showing",
        description:
          "We'd rather ship a small, real thing in week four than a perfect deck in week eight. The first thing that goes live is the spine — everything else iterates onto it.",
      },
      {
        id: "iv",
        title: "Senior on the work",
        description:
          "The senior team you meet in the pitch is the senior team that builds the thing. We don't hand off; the partner who scoped the engagement owns delivery to launch.",
      },
      {
        id: "v",
        title: "Compounding by default",
        description:
          "Every project leaves an asset behind — a design system, a content engine, a model, a measurement spine. The next project starts further down the curve than the last one ended.",
      },
    ],
  },
  team: {
    eyebrow: "05 · The team",

    title: [
      {
        segments: [
          {
            text: "Senior people,",
          },
        ],
      },
      {
        segments: [
          {
            text: "on the work.",
          },
        ],
      },
    ],

    meta: "A flat structure of practice leads. Each owns a discipline; each ships their own work.",
  },
  cta: {
    primaryText: "Want to see what we'd",
    secondaryText: "build for you?",
    button: {
      label: "See services",
      href: "/services",
    },
  },
};
