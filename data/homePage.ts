import InsightsOverview from "@/components/home/InsightsOverview";
import ServicesOverview from "@/components/home/servicesOverview/ServicesOverview";

export const homePage = {
  hero: {
    footer_Text:
      "A digital media, marketing & technology studio inside the Default Media Group — building AI-native websites, social systems and growth programmes for brands that want to set the standard, not chase it.",
  },
  valueProp: {
    eyebrow: "01 · The proposition",
    title: [
      {
        segments: [{ text: "Five practices." }],
      },
      {
        segments: [
          { text: "One " },
          { text: "AI-native", italic: true, accent: true },
        ],
      },
      {
        segments: [{ text: "operating model." }],
      },
    ],
    lede: "Default Social is the digital, social and technology arm of the Default Media Group. We work with brands solving complex growth and brand challenges, where the answer sits somewhere between creative, code and signal.",
  },
  insightsOverview: {
    eyebrow: "04 · Insights",
    title: [
      {
        segments: [{ text: "Field notes from" }],
      },
      {
        segments: [{ text: "the practice." }],
      },
    ],
    meta: "Long-form thinking on agency operating models, what we've shipped recently, and what's coming next.",
  },
  aboutOverview: {
    eyebrow: "03 · About",
    title: [
      {
        segments: [{ text: "A studio between" }],
      },
      {
        segments: [{ text: "signal and craft." }],
      },
    ],
    meta: "The digital, social & technology arm of the Default Media Group — a ten-year-old company with one studio in Brentford, one foot in the data, and both eyes on what's next.",
    keyPeople: {
      label: "Key people",
      description:
        "Senior partners on the work — the team you meet in the pitch is the team that ships.",
    },
  },
  servicesOverview: {
    eyebrow: "02 · Services",
    title: [
      {
        segments: [
          {
            text: "Five practices,",
          },
        ],
      },
      {
        segments: [
          {
            text: "one operating model.",
          },
        ],
      },
    ],

    meta: "Each practice is led by a senior partner and runs as an autonomous unit, networked through a shared AI and data layer. Engage them individually — or as a programme.",
  },
};
