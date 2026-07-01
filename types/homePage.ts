// types/page.ts

import type { LinkItem, SectionIntro, PageHeader } from "./shared";

export type HomePage = {
  hero: HomeHero;
  valueProp: PageHeader;
  servicesOverview: SectionIntro;
  aboutOverview: AboutOverviewSection;
  insightsOverview: SectionIntro;
  contactFormOverview: SectionIntro;
};

export type HomeHero = {
  footer_Text: string;
  primaryCta?: LinkItem;
  secondaryCta?: LinkItem;
};



export type AboutOverviewSection = SectionIntro & {
  keyPeople: {
    label: string;
    description: string;
  };
};
