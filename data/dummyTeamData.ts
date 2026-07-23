import type { Person } from "@/types/collections/person";

export const dummyPerson: Person = {
  slug: "david-browne",
  initials: "DB",
  name: "David Browne",
  role: "Head of Development",
  keyPerson: true,

  pronouns: "He / Him",
  focusArea: "Practice Lead",
  discipline: "Engineering",
  location: "London",
  joinedYear: "2026",

  lede:
    "David leads the engineering practice, helping turn ambitious ideas into reliable digital products through thoughtful architecture, modern tooling and close collaboration with strategy and creative teams.",

  bioHeading: "Building products that stay fast, maintainable and adaptable.",

  bioParagraphs: [
    "David specialises in modern web engineering, building scalable platforms that balance performance, accessibility and long-term maintainability. His work focuses on creating technical foundations that allow teams to move quickly without compromising quality.",

    "Working alongside strategy, design and content, he translates business objectives into practical technical solutions. From content architecture and design systems to deployment pipelines and performance optimisation, his role is ensuring every product is built to evolve.",

    "He is particularly interested in the intersection of AI, content management and modern web platforms, exploring how intelligent tooling can simplify editorial workflows while improving the overall user experience."
  ],

  expertise: [
    "Next.js",
    "TypeScript",
    "Sanity CMS",
    "AI Integration",
    "Design Systems",
    "Core Web Vitals"
  ],

  email: "info@defaultsocial.co.uk",

  linkedin: "https://linkedin.com/in/davidbrowne"
};