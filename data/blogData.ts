export const insights:blogPostProps[] = [
  {
    tag: "SEO",
    author: "David Browne",
    date: "April 2026",
    readTime: "6 min read",
    title: "Topic clusters in the age of answer engines.",
    description:
      "How we restructure content systems for sites that need to be both Google-friendly and LLM-citable.",
    href: "/insights/seo-topic-clusters",
  },
  {
    tag: "Social",
    author: "David Browne",
    date: "April 2026",
    readTime: "4 min read",
    title: "Anatomy of a campaign that travelled 14 million times.",
    description:
      "A short forensic on a recent platform-native idea: the brief, the spike, and the long tail.",
    href: "/insights/anatomy-of-a-campaign-that-travelled-14-million-times",
  },
  {
    tag: "Web",
    author:"David Browne",
    date: "March 2026",
    readTime: "7 min read",
    title: "Why we ship Next.js with a modular middleware layer.",
    description:
      "A look at our default stack — and the patterns that have made the biggest difference for clients.",
    href: "/insights/why-we-ship-nextjs-with-a-modular-middleware-layer",
  },
  {
    featured: true,
    date: "May 2026",
    tag: "AI Practice",
    readTime: "12 min read",
    title: "The AI concierge isn't a chatbot. It's a sales engineer.",
    description:"",
    excerpt:
      "Most 'AI on the website' projects fail because they treat AI as a feature — a chatbot in the corner. The teams that win treat it as a role: the sales engineer who's always on, always patient, and always one step ahead of the brief. Here's the four-layer pattern we use to make that real.",
    authorInitials: "R",
    author: "Robin McGlashan",
    authorRole: "Founder, Default Media Group",
  }
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
  href?:string
};


