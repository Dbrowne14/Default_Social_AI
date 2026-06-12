export const insights: blogPostProps[] = [
  {
    tag: "SEO",
    author: "David Browne",
    date: "April 2026",
    readTime: "6 min",
    title: "Topic clusters in the age of answer engines.",
    excerpt:
      "How we restructure content systems for sites that need to be both Google-friendly and LLM-citable.",
    slug: "seo-topic-clusters",
  },
  {
    tag: "Social",
    author: "David Browne",
    date: "April 2026",
    readTime: "4 min",
    title: "Anatomy of a campaign that travelled 14 million times.",
    excerpt:
      "A short forensic on a recent platform-native idea: the brief, the spike, and the long tail.",
    slug: "anatomy-of-a-campaign-that-travelled-14-million-times",
  },
  {
    tag: "Web",
    author: "David Browne",
    date: "March 2026",
    readTime: "7 min",
    title: "Why we ship Next.js with a modular middleware layer.",
    excerpt:
      "A look at our default stack — and the patterns that have made the biggest difference for clients.",
    slug: "why-we-ship-nextjs-with-a-modular-middleware-layer",
  },
  {
    featured: true,
    date: "May 2026",
    tag: "AI Practice",
    subject: "The AI Concierge",
    readTime: "12 min",
    title: "The AI concierge isn't a chatbot. It's a sales engineer.",
    excerpt:
      "Most 'AI on the website' projects fail because they treat AI as a feature — a chatbot in the corner. The teams that win treat it as a role: the sales engineer who's always on, always patient, and always one step ahead of the brief. Here's the four-layer pattern we use to make that real.",
    authorInitials: "R",
    author: "Robin McGlashan",
    authorRole: "Founder, Default Media Group",
    slug: "ai-concierge-sales-engineer",
    imageCaption:
      "The concierge sits between the brief and the buyer — closer to a sales engineer than a help widget.",
  },
  {
    tag: "Social",
    date: "Apr 2026",
    readTime: "4 min",
    title: "Anatomy of a campaign that travelled 14m times.",
    excerpt:
      "A short forensic on a recent platform-native idea: the brief, the spike, and the long tail no-one talks about.",
    author: "David Browne",
    slug: "anatomy-campaign-travelled-14m-times",
  },
  {
    tag: "AI Practice",
    date: "Mar 2026",
    readTime: "9 min",
    title: "Personalisation without the creep factor.",
    excerpt:
      "A working pattern for first-party personalisation that improves the experience without spooking the user — or the regulator.",
    author: "David Browne",
    slug: "personalisation-without-creep-factor",
  },
  {
    tag: "Strategy",
    date: "Mar 2026",
    readTime: "11 min",
    title: "The marketing mix is a forecast, not a plan.",
    excerpt:
      "A practical case for predictive mix modelling — and the reason most quarterly plans drift by week six.",
    author: "David Browne",
    slug: "marketing-mix-is-a-forecast",
  },
  {
    tag: "Studio Ops",
    date: "Feb 2026",
    readTime: "5 min",
    title: "Why our discovery is one week, not four.",
    excerpt:
      "What we cut to compress discovery without losing the strategic depth — and the one document we'd never skip.",
    author: "David Browne",
    slug: "discovery-one-week-not-four",
  },
  {
    tag: "AI Practice",
    date: "Feb 2026",
    readTime: "8 min",
    title: "The four AI layers every brand site should plan for.",
    excerpt:
      "Experience, content, growth, analytics — and why 'AI chatbot' usually only covers a quarter of the value.",
    author: "David Browne",
    slug: "four-ai-layers-brand-site",
  },
  {
    tag: "SEO",
    date: "Jan 2026",
    readTime: "10 min",
    title: "Programmatic SEO, ethical edition.",
    excerpt:
      "Where programmatic still works, where it bites you, and the structural decisions that decide which.",
    author: "David Browne",
    slug: "programmatic-seo-ethical-edition",
  },
];

export type blogPostProps = {
  featured?: boolean;
  subject?: string;
  date: string;
  tag: string;
  readTime: string;
  title: string;
  excerpt?: string;
  authorInitials?: string;
  author: string;
  authorRole?: string;
  slug: string;
  imageCaption?: string;
};
