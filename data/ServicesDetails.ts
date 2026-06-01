export type serviceType = {
  id: string;
  category: string;
  title: string[];
  description: string;
  tags: { label: string; ai?: boolean }[];
  featured?: boolean;
};

export const servicesDetails: serviceType[] = [
  {
    id: "01",
    category: "Web Development",
    title: ["Custom, scalable", "AI-ready builds."],
    description:
      "Performance-optimised marketing sites and product front-ends — engineered on Next.js, headless CMS and modular AI APIs.",
    tags: [
      { label: "Next.js" },
      { label: "Headless CMS" },
      { label: "AI-ready", ai: true },
    ],
  },
  {
    id: "02",
    category: "SEO & Organic Growth",
    title: ["Search that compounds", "over time."],
    description:
      "Technical foundations, content strategy and AI-assisted insight — built to grow assets that earn, not rent.",
    tags: [
      { label: "Technical SEO" },
      { label: "Content systems" },
      { label: "AI insights", ai: true },
    ],
  },
  {
    id: "03",
    category: "Social & Viral Campaigns",
    title: ["Platform-native ideas", "that travel."],
    description:
      "From always-on social systems to viral-first campaign IP — informed by signal, not vibes.",
    tags: [
      { label: "Always-on" },
      { label: "Campaign IP" },
      { label: "Audience AI", ai: true },
    ],
  },
  {
    id: "04",
    category: "Social-First Creative",
    title: ["Brand storytelling", "built for the feed."],
    description:
      "Short-form, motion and static content — directed by craft, sharpened by performance data.",
    tags: [
      { label: "Short-form" },
      { label: "Motion" },
      { label: "Creative direction" },
    ],
  },
  {
    id: "05",
    category: "Marketing Strategy",
    title: ["Integrated planning, executed with AI-grade discipline."],
    description:
      "Data-driven planning, audience architecture, channel mix and forecasting — supported by predictive AI tooling so the plan flexes with the market, not against it.",
    tags: [
      { label: "Strategy sprints" },
      { label: "Forecasting" },
      { label: "Channel mix" },
      { label: "Predictive AI", ai: true },
    ],
    featured: true,
  },
];