// types for the "Three ways to work" services-page section
// local, component-owned content — not yet CMS-backed (see lib/content/waysOfWorking.ts)

export type EngagementModel = {
  id: string;
  title: string;
  proposition: string;
  description: string;
  capabilities: string[];
  /** Stable `service.id` values (e.g. "01") this model draws on, in the same order as the services collection */
  drawsOn: string[];
};

export type WaysOfWorkingContent = {
  eyebrow: string;
  headline: {
    line1: string;
    line2Prefix: string;
    line2Accent: string;
    line3: string;
  };
  intro: {
    before: string;
    accent: string;
    after: string;
  };
  capabilitiesLabel: string;
  drawsOnLabel: string;
  practicesStatement: string;
  models: EngagementModel[];
};
