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
    intro: [
      {
        superText: "Walk into any pitch this year and someone will ask for 'AI on the website.' What they almost always mean is a chatbot — a friendly bubble in the bottom-right that answers FAQs and, on a good day, books a call. We build those. We also think they are the least interesting thing AI can do for a brand, and the reason so many of these projects quietly underwhelm six weeks after launch.",
      },
      {
        text: "The framing is the problem. A chatbot is a feature: a box you bolt on, scoped by how many questions it can deflect. A sales engineer is a role: the person who joins the call when the conversation gets technical, who knows the product cold, who can read whether you're a tyre-kicker or a signed contract waiting to happen — and who knows exactly when to bring in a human and get out of the way.",
      },
      {
        text: "When you brief AI as a role instead of a feature, almost every decision downstream changes: what it needs to know, what it's allowed to decide, how you measure it, and what 'good' looks like. This essay is the pattern we use to make that real — four layers, in the order we build them.",
      },
    ],

    pullQuotes: [
      {
        quote:
          "A chatbot deflects questions. A sales engineer moves a deal forward.",
        cite: "The distinction the whole essay turns on",
      },
    ],

    sections: [
      {

        number: "01",
        kicker: "Memory",
        title: "It has to remember the brief",
        paragraphs: [
          {
            text: "The first layer is memory, and it's the one most teams skip. A generic assistant starts every conversation from zero — it has no idea who you are, what page you arrived on, what campaign sent you, or what you asked the last time you visited. A sales engineer who reintroduced themselves every five minutes would be fired by lunchtime.",
          },
          {
            text: "Memory means the concierge is grounded in two things: the brand's own context — positioning, services, the real difference between the Sprint and the Programme — and the visitor's session — referrer, pages viewed, the half-finished form, the question they asked before they got distracted. None of that is exotic. It's a retrieval layer over your own content and a thin profile of the session. But it changes the first sentence the AI gets to say from 'How can I help?' to something that already knows why you're here.",
          },
          {
            text: "In practice this is unglamorous. On a live site, the concierge reads the section you're sitting in when you open it — offering to scope work on the Services page, offering to summarise the essay on an Insights page. Same model, different memory.",
          },
        ],
      },

      {
   
        number: "02",
        kicker: "Inventory",
        title: "It has to know what you actually sell",
        paragraphs: [
          {
            text: "The second layer is the one clients are most nervous about and the one that pays for the whole project. A help-desk bot can get away with knowing your FAQ. A sales engineer has to know the inventory: what you offer, what it costs, what's in scope, what isn't, and where the genuine trade-offs live.",
          },
          {
            text: "This is uncomfortable because it forces a decision most brands defer: how much of your commercial reality are you willing to put in front of a machine that talks to strangers? Our answer is a tiered one — and it's the heart of the pattern.",
          },
          {
            text: "We tier it. Public knowledge — positioning, services, process, the shape of an engagement — the AI shares freely, because it's already on the site. Qualified knowledge — indicative ranges, typical timelines, what moves the price — it shares only once a visitor has shown genuine intent. Human-only knowledge — specific quotes, contract terms, anything that commits the studio — it never touches; it names the boundary and hands over.",
          },
          {
            text: "Notice the AI isn't deciding the commercials. It's deciding which tier a given visitor has earned — and that's a judgement call, which is the next layer.",
          },
        ],
      },

      {

        number: "03",
        kicker: "Judgement",
        title: "It has to qualify, and it has to say no",
        paragraphs: [
          {
            text: "A good sales engineer spends as much energy disqualifying as qualifying. The wrong-fit lead who consumes three weeks of scoping is more expensive than the deal you politely declined on day one.",
          },
          {
            text: "So the third layer is judgement: the concierge reads the conversation for the signals that actually predict fit — budget posture, timeline, decision authority, the specificity of the problem — and routes accordingly.",
          },
          {
            text: "Crucially, 'routes accordingly' sometimes means saying no. A concierge that enthusiastically promises everything to everyone isn't helpful; it's a liability that books calls your team has to un-book.",
          },
          {
            text: "What it never does is invent a number, promise a date, or commit the studio to anything a partner would have to honour. Within those limits, every turn it re-reads fit and picks one of three moves: go deeper, hand to a human, or wind down gracefully.",
          },
        ],
      },

      {
        number: "04",
        kicker: "Handoff",
        title: "It has to know when to step back",
        paragraphs: [
          {
            text: "The final layer is the one that separates a tool from a teammate: knowing the moment to stop talking and bring in a person.",
          },
          {
            text: "The best sales engineers are defined as much by their handoffs as their pitches — the clean briefing note, the warm introduction, the context the human doesn't have to re-gather.",
          },
          {
            text: "So the concierge's job at the end isn't to close. It's to hand over a deal that's already warm: a short, structured summary of who the visitor is, what they need, which tier of knowledge they reached, and why it thinks they're worth a call.",
          },
          {
            text: "Here's the test. If your AI's proudest metric is 'questions answered,' it's still a chatbot. If it's 'qualified conversations handed to a human, with context,' you've built the sales engineer.",
          },
        ],
      },
    ],

    conclusion: [
      {
        text: "None of these four layers requires a frontier model or a research budget. They require a decision: to treat AI as a colleague with a job description rather than a feature with a backlog.",
      },
      {
        text: "Memory so it knows the context. Inventory so it knows the product. Judgement so it qualifies honestly. Handoff so it knows when it's done.",
      },
      {
        text: "Do that, and the bubble in the corner stops being the thing you apologise for in month two. It becomes the most patient, best-briefed member of the team — the one that's always on, never tired, and smart enough to know when to get a human.",
      },
      {
        text: "That's not a chatbot. That's a sales engineer.",
      },
    ],
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
  intro?: text[];
  pullQuotes?: pullQuotes[];
  sections?: sectionProps[];
  conclusion?: text[];
};

type text = {
  text?: string;
  superText?:string;
};

type pullQuotes = {
  quote?: string;
  cite?: string;
};

type sectionProps = {
  number: string;
  kicker: string;
  title: string;
  paragraphs: text[];
};
