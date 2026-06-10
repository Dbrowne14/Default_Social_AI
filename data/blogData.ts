export const insights: blogPostProps[] = [
  {
    tag: "SEO",
    author: "David Browne",
    date: "April 2026",
    readTime: "6 min",
    title: "Topic clusters in the age of answer engines.",
    description:
      "How we restructure content systems for sites that need to be both Google-friendly and LLM-citable.",
    href: "/insights/seo-topic-clusters",
  },
  {
    tag: "Social",
    author: "David Browne",
    date: "April 2026",
    readTime: "4 min",
    title: "Anatomy of a campaign that travelled 14 million times.",
    description:
      "A short forensic on a recent platform-native idea: the brief, the spike, and the long tail.",
    href: "/insights/anatomy-of-a-campaign-that-travelled-14-million-times",
  },
  {
    tag: "Web",
    author: "David Browne",
    date: "March 2026",
    readTime: "7 min",
    title: "Why we ship Next.js with a modular middleware layer.",
    description:
      "A look at our default stack — and the patterns that have made the biggest difference for clients.",
    href: "/insights/why-we-ship-nextjs-with-a-modular-middleware-layer",
  },
  {
    featured: true,
    date: "May 2026",
    tag: "AI Practice",
    readTime: "12 min",
    title: "The AI concierge isn't a chatbot. It's a sales engineer.",
    description: "",
    excerpt:
      "Most 'AI on the website' projects fail because they treat AI as a feature — a chatbot in the corner. The teams that win treat it as a role: the sales engineer who's always on, always patient, and always one step ahead of the brief. Here's the four-layer pattern we use to make that real.",
    authorInitials: "R",
    author: "Robin McGlashan",
    authorRole: "Founder, Default Media Group",
  },
  {
    tag: "Social",
    date: "Apr 2026",
    readTime: "4 min",
    title: "Anatomy of a campaign that travelled 14m times.",
    excerpt:
      "A short forensic on a recent platform-native idea: the brief, the spike, and the long tail no-one talks about.",
    author: "David Browne",
    href: "/insights/anatomy-campaign-travelled-14m-times",
  },
  {
    tag: "AI Practice",
    date: "Mar 2026",
    readTime: "9 min",
    title: "Personalisation without the creep factor.",
    excerpt:
      "A working pattern for first-party personalisation that improves the experience without spooking the user — or the regulator.",
    author: "David Browne",
    href: "/insights/personalisation-without-creep-factor",
  },
  {
    tag: "Web",
    date: "Mar 2026",
    readTime: "7 min",
    title: "Why we ship Next.js with an AI middleware layer.",
    excerpt:
      "A look at our default stack — and the three middleware patterns that have made the biggest difference for clients.",
    author: "David Browne",
    href: "/insights/nextjs-ai-middleware-layer",
  },
  {
    tag: "Strategy",
    date: "Mar 2026",
    readTime: "11 min",
    title: "The marketing mix is a forecast, not a plan.",
    excerpt:
      "A practical case for predictive mix modelling — and the reason most quarterly plans drift by week six.",
    author: "David Browne",
    href: "/insights/marketing-mix-is-a-forecast",
  },
  {
    tag: "Studio Ops",
    date: "Feb 2026",
    readTime: "5 min",
    title: "Why our discovery is one week, not four.",
    excerpt:
      "What we cut to compress discovery without losing the strategic depth — and the one document we'd never skip.",
    author: "David Browne",
    href: "/insights/discovery-one-week-not-four",
  },
  {
    tag: "AI Practice",
    date: "Feb 2026",
    readTime: "8 min",
    title: "The four AI layers every brand site should plan for.",
    excerpt:
      "Experience, content, growth, analytics — and why 'AI chatbot' usually only covers a quarter of the value.",
    author: "David Browne",
    href: "/insights/four-ai-layers-brand-site",
  },
];

export type blogPostProps = {
  featured?: boolean;
  date: string;
  tag: string;
  readTime: string;
  title: string;
  description?: string;
  excerpt?: string;
  authorInitials?: string;
  author: string;
  authorRole?: string;
  href?: string;
};
