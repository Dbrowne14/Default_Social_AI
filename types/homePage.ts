// types/page.ts

import type { TitleLine, LinkItem } from "./shared";

export type HomePage = {
  hero: HomeHero;
  valueProp: ValuePropSection;
  servicesOverview: SectionIntro;
  aboutOverview: AboutOverviewSection;
  insightsOverview: SectionIntro;
};

export type HomeHero = {
  footer_Text: string;
  primaryCta?: LinkItem;
  secondaryCta?: LinkItem;
};

export type ValuePropSection = {
  eyebrow: string;
  title: TitleLine[];
  lede: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: TitleLine[];
  meta: string;
};

export type AboutOverviewSection = SectionIntro & {
  keyPeople: {
    label: string;
    description: string;
  };
};