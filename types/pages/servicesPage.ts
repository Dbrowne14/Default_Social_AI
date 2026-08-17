import type { PageHeading, PageCTA, TitleLine } from "../shared";

export type ServicesPage = {
  servicesHeader: PageHeading;
  waysOfWorking: WaysOfWorkingSection;
  cta: PageCTA;
};

export type PracticeReference = {
  id: string;
};

export type WaysOfWorkingSection = {
  eyebrow: string;
  title: TitleLine[];
  intro: TitleLine[];
  capabilitiesLabel: string;
  drawsOnLabel: string;
  practicesStatement: string;
  models: WaysOfWorkingModelContent[];
};

export type WaysOfWorkingModelContent = {
  id: string;
  title: string;
  proposition: string;
  description: string;
  capabilities: string[];
  practices: WaysOfWorkingPractice[];
};

export type WaysOfWorkingPractice = {
  id: string;
  linkName?: string;
};
