//types for service data schema

import type { TitleDescription } from "./shared";

export type Service = {
  id: string;
  linkName: string;
  category: string;
  title: string[];
  description: string;
  blurb: string;
  tags: ServiceTag[];
  featured?: boolean;
  offers: ServiceOffer[];
  aiCallout: ServiceCallout;
  processSteps: ServiceProcessStep[];
};

export type ServiceTag = {
  label: string;
  ai?: boolean;
};

export type ServiceOffer = TitleDescription;

export type ServiceCallout = TitleDescription;

export type ServiceProcessStep = ServiceOffer & {
  id: string;
};

export type ServiceTickerItem = {
  id: string;
  label: string;
  href?: string;
  source: "service" | "theme";
}
