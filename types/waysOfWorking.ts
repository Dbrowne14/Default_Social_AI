// types for the "Three ways to work" services-page section
// MIGRATION REFERENCE ONLY — the live section is now typed via
// types/pages/servicesPage.ts (WaysOfWorkingSection). Kept alongside
// lib/content/waysOfWorking.ts until that content is transcribed into
// Sanity Studio and verified.

import type { TitleLine } from "./shared";

export type PracticeReference = {
  id: string;
};

export type EngagementModel = {
  id: string;
  title: string;
  proposition: string;
  description: string;
  capabilities: string[];
  practices: PracticeReference[];
};

export type WaysOfWorkingSection = {
  eyebrow: string;
  title: TitleLine[];
  intro: TitleLine[];
  capabilitiesLabel: string;
  drawsOnLabel: string;
  practicesStatement: string;
  models: EngagementModel[];
};