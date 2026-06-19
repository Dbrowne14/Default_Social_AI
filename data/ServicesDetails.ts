import type { ServiceTypeProps } from "@/types";

export const servicesDetails: ServiceTypeProps[] = [
  {
    id: "01",
    linkName: "web",
    category: "Web Development",
    title: ["Custom, scalable", "AI-ready builds."],
    description:
      "Performance-optimised marketing sites and product front-ends — engineered on Next.js, headless CMS and modular AI APIs.",
    tags: [
      { label: "Next.js" },
      { label: "Headless CMS" },
      { label: "AI-ready", ai: true },
    ],
    blurb:
      "Custom, scalable, AI-ready builds — engineered on Next.js and headless architecture. We treat the website as a product, not a brochure: shipped early, instrumented from day one, and built to absorb AI capability without a re-platform.",
    offers: [
      {
        title: "Marketing & brand sites",
        description:
          "Editorial-grade marketing builds — design-led, performance-tuned, conversion-shaped.",
      },
      {
        title: "Product front-ends",
        description:
          "Customer dashboards, portals and product surfaces — same studio, same standards.",
      },
      {
        title: "Headless CMS architecture",
        description:
          "Sanity, Contentful or custom — content systems your marketing team will actually use.",
      },
      {
        title: "Performance & Core Web Vitals",
        description:
          "Sub-1s LCP, sub-100ms INP, schema-clean structure — non-negotiable, not a phase 2.",
      },
      {
        title: "AI-ready architecture",
        description:
          "Modular API spine so chat, personalisation and content engines plug in without re-builds.",
      },
    ],
    aiCallout: {
      title: "A site that thinks at the edge.",
      description:
        "We ship Next.js builds with an AI middleware layer for personalisation, chat concierge, and intelligent routing — all GDPR-clean, all observable, all swappable as models evolve.",
    },
    process: [
      {
        id: "01",
        title: "Discovery",
        description: "Audit + stakeholder interviews",
      },
      {
        id: "02",
        title: "Architect",
        description: "IA, content model, AI layer plan",
      },
      { id: "03", title: "Design", description: "Design system + key flows" },
      {
        id: "04",
        title: "Build",
        description: "Next.js + CMS + AI middleware",
      },
      {
        id: "05",
        title: "Launch",
        description: "QA, perf, 90-day learning loop",
      },
    ],
  },
  {
    id: "02",
    linkName: "seo",
    category: "SEO & Organic Growth",
    title: ["Search that compounds", "over time."],
    description:
      "Technical foundations, content strategy and AI-assisted insight — built to grow assets that earn, not rent.",
    tags: [
      { label: "Technical SEO" },
      { label: "Content systems" },
      { label: "AI insights", ai: true },
    ],
    blurb:
      "Search that compounds — technical foundations, topic systems and AI-assisted insight tooling. We build owned audience assets that earn their cost back the first year, then keep returning.",
    offers: [
      {
        title: "Technical SEO audits",
        description:
          "Crawl, index, schema, Core Web Vitals — the foundations most agencies skip.",
      },
      {
        title: "Topic & content systems",
        description:
          "Topic clusters, briefs, internal linking — structured for both Google and answer engines.",
      },
      {
        title: "Editorial production",
        description:
          "In-house writers + AI-assisted briefs. Quality first, volume second. Human-edited, always.",
      },
      {
        title: "Programmatic SEO",
        description:
          "Where it makes sense — large-scale page generation with data sources you control.",
      },
      {
        title: "LLM & AI search optimisation",
        description:
          "Structuring content to be cited by AI answer engines — the new top of funnel.",
      },
    ],
    aiCallout: {
      title: "Briefs written by AI. Stories written by humans.",
      description:
        "Our SEO engine uses AI for topic discovery, intent clustering and brief generation — then hands the brief to a human editor. Speed without slop.",
    },
    process: [
      {
        id: "01",
        title: "Audit",
        description: "Technical + topic gap analysis",
      },
      {
        id: "02",
        title: "Architect",
        description: "Cluster map + production model",
      },
      { id: "03", title: "Brief", description: "AI-assisted briefs, edited" },
      {
        id: "04",
        title: "Publish",
        description: "Production cadence + interlinking",
      },
      {
        id: "05",
        title: "Compound",
        description: "Quarterly refresh + expansion",
      },
    ],
  },
  {
    id: "03",
    linkName: "social",
    category: "Social & Viral Campaigns",
    title: ["Platform-native ideas", "that travel."],
    description:
      "From always-on social systems to viral-first campaign IP — informed by signal, not vibes.",
    blurb:
      "From always-on social systems to viral-first campaign IP. We don't separate 'organic' from 'campaign' — they're the same operating discipline at different intensities. Signal in, ideas out.",
    tags: [
      { label: "Always-on" },
      { label: "Campaign IP" },
      { label: "Audience AI", ai: true },
    ],
    offers: [
      {
        title: "Always-on social management",
        description:
          "Platform-native, channel-strategic, weekly cadence. Six platforms, one playbook.",
      },
      {
        title: "Viral campaign IP",
        description:
          "Original creative concepts engineered for travel — built for the algorithm and the share.",
      },
      {
        title: "Creator & partnership programmes",
        description:
          "Talent identification, briefing and longitudinal partnerships — not one-off posts.",
      },
      {
        title: "Community management",
        description:
          "Comment moderation, DM triage, sentiment dashboards — staffed in-house.",
      },
      {
        title: "Paid amplification",
        description:
          "Where the data says it works. We don't reflex-spend; we test, then scale.",
      },
    ],
    aiCallout: {
      title: "Audience signal, on tap.",
      description:
        "Our audience-AI ingests platform + first-party data and surfaces emerging conversation, content gaps and creative angles weekly — so the campaign team starts informed.",
    },
    process: [
      { id: "01", title: "Listen", description: "Audience & signal sweep" },
      {
        id: "02",
        title: "Plan",
        description: "Always-on rhythm + campaign IP",
      },
      { id: "03", title: "Create", description: "Native production at pace" },
      { id: "04", title: "Publish", description: "Platform-native, measured" },
      { id: "05", title: "Amplify", description: "Paid where data says yes" },
    ],
  },

  {
    id: "04",
    linkName: "creative",
    category: "Social-First Creative",
    title: ["Brand storytelling", "built for the feed."],
    description:
      "Short-form, motion and static content — directed by craft, sharpened by performance data.",
    blurb:
      "Short-form, motion, static, episodic. Brand storytelling designed for the feed first — then ported back to broadcast and brand. Performance data informs craft, doesn't replace it.",
    tags: [
      { label: "Short-form" },
      { label: "Motion" },
      { label: "Creative direction" },
    ],
    offers: [
      {
        title: "Short-form & motion",
        description:
          "9:16 first thinking. Vertical, fast, narratively dense, made for the swipe.",
      },
      {
        title: "Episodic content franchises",
        description:
          "Series-format thinking — content that builds audience over weeks, not days.",
      },
      {
        title: "Brand world & toolkit",
        description:
          "Identity, tone, motion language, sound — a system the platforms can stretch.",
      },
      {
        title: "In-house studio production",
        description:
          "Direction, shoot, edit, post — Brentford studio + remote crews.",
      },
      {
        title: "Performance-led iteration",
        description:
          "Creative reviewed against signal weekly — what hits gets sharpened, what misses gets retired.",
      },
    ],
    aiCallout: {
      title: "A second pair of eyes on every cut.",
      description:
        "Pre-release, our AI scores each piece against hook-strength, retention curves and platform fit — surfacing notes the human editors can take or leave.",
    },
    process: [
      { id: "01", title: "Concept", description: "Brief + idea sprint" },
      { id: "02", title: "Script", description: "Hooks, beats, platform fit" },
      { id: "03", title: "Shoot", description: "Studio or location" },
      {
        id: "04",
        title: "Edit",
        description: "Cut, AI score, human refine",
      },
      {
        id: "05",
        title: "Release",
        description: "Platform-native publish",
      },
    ],
  },

  {
    id: "05",
    linkName: "strategy",
    category: "Marketing Strategy",
    title: ["Integrated planning, executed with AI-grade discipline."],
    description:
      "Data-driven planning, audience architecture, channel mix and forecasting — supported by predictive AI tooling so the plan flexes with the market, not against it.",
    featured: true,
    blurb:
      "Integrated digital marketing strategies — data-driven planning, audience architecture, channel mix and forecasting. Predictive AI tooling lets the plan flex with the market, not against it.",
    tags: [
      { label: "Strategy sprints" },
      { label: "Forecasting" },
      { label: "Channel mix" },
      { label: "Predictive AI", ai: true },
    ],
    offers: [
      {
        title: "Brand & growth strategy",
        description:
          "One coherent story of where the brand goes next, and how it gets paid for getting there.",
      },
      {
        title: "Audience architecture",
        description:
          "Segmentation that's actually used — built around behavioural signal, not personas.",
      },
      {
        title: "Channel mix & forecasting",
        description:
          "Mix modelling and predictive forecasting — what to spend where, and what to expect back.",
      },
      {
        title: "Measurement frameworks",
        description:
          "One north star, three load-bearing metrics, a dashboard the C-suite reads.",
      },
      {
        title: "Fractional CMO / strategy embed",
        description:
          "For scale-ups without a CMO — senior strategy on call, weekly cadence.",
      },
    ],
    aiCallout: {
      title: "Forecasts that update themselves.",
      description:
        "Our strategy stack ingests sales, ad spend and engagement data weekly — and the AI re-forecasts the plan, flags drift, and proposes reallocations before the next steering meeting.",
    },
    process: [
      {
        id: "01",
        title: "Diagnose",
        description: "Where the brand actually is",
      },
      {
        id: "02",
        title: "Hypothesise",
        description: "Where it could go, and why",
      },
      {
        id: "03",
        title: "Model",
        description: "Mix, forecast, predicted impact",
      },
      {
        id: "04",
        title: "Activate",
        description: "Briefs into the studio",
      },
      {
        id: "05",
        title: "Adapt",
        description: "Weekly signal, quarterly reset",
      },
    ],
  },
];
