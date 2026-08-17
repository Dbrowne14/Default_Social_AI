import type { WaysOfWorkingContent } from "@/types/waysOfWorking";

// Practice ids referenced by `drawsOn` map to the `service.id` values returned
// by getAllServices() (ordered 01 Web, 02 SEO, 03 Social, 04 Creative, 05 Strategy).
export const waysOfWorkingContent: WaysOfWorkingContent = {
  eyebrow: "WAYS TO WORK",
  headline: {
    line1: "THREE WAYS",
    line2Prefix: "TO",
    line2Accent: "work",
    line3: "WITH US.",
  },
  intro: {
    before:
      "Engage us across the full brief, for strategic direction, or for specialist creative support. Each model can draw on the wider ",
    accent: "Default Social",
    after: " practice where the work requires it.",
  },
  capabilitiesLabel: "Capabilities can include",
  drawsOnLabel: "Draws on",
  practicesStatement: "All three draw on the same five practices",
  models: [
    {
      id: "01",
      title: "Full Service",
      proposition: "A complete digital partner from strategy to delivery.",
      description:
        "We work as an extension of your team, bringing strategy, creativity, technology and execution together around a shared objective.",
      capabilities: [
        "Digital strategy",
        "Brand development",
        "Social media",
        "Content",
        "Campaigns",
        "Web design & development",
        "Digital marketing",
        "Data & performance",
        "AI-enabled solutions",
      ],
      drawsOn: ["01", "02", "03", "04", "05"],
    },
    {
      id: "02",
      title: "Strategy",
      proposition: "Turning insight into action.",
      description:
        "We combine market, audience, platform and data insight to identify opportunities, define priorities and build clear strategies for growth.",
      capabilities: [
        "Brand positioning",
        "Audience research",
        "Digital strategy",
        "Social strategy",
        "Content strategy",
        "Campaign planning",
        "Competitor analysis",
        "Growth strategy",
        "AI & technology integration",
      ],
      drawsOn: ["02", "03", "05"],
    },
    {
      id: "03",
      title: "Creative",
      proposition: "Ideas that capture attention and build connections.",
      description:
        "From campaigns and content to brand and digital experiences, we create work designed to earn attention, strengthen relationships and inspire action.",
      capabilities: [
        "Creative campaigns",
        "Social content",
        "Video",
        "Photography",
        "Brand design",
        "Motion",
        "Digital assets",
        "Web creative direction",
        "Creator content",
      ],
      drawsOn: ["01", "03", "04"],
    },
  ],
};
