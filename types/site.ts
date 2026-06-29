// types/site.ts

import type { LinkItem, TitleDescription } from "./shared";

export type ContactDetails = {
  email: string;
  phone: string;
  location: string;
};

export type FooterContent = {
  eyebrow: string;
  description: string;
};

export type GroupLink = LinkItem & {
    src:string;
}

export type SiteSettings = {
  siteName: string;
  siteUrl: string;
  groupLink: GroupLink;
  contact: ContactDetails;
  footer: FooterContent;
};

export type SiteChromeProps = {
  siteSettings: SiteSettings;
  navigation: LinkItem[];
};


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

export type ServiceOffer = TitleDescription

export type ServiceCallout = TitleDescription

export type ServiceProcessStep = ServiceOffer & {
  id: string;
};

//Insights - Blog 
export type Insight = {
  featured?: boolean;
  subject?: string;
  date: string;
  tag: string;
  allTags?: string[];
  readTime: string;
  title: string;
  excerpt?: string;
  authorInitials?: string;
  author: string;
  authorRole?: string;
  slug: string;
  imageCaption?: string;
  intro?: InsightTextBlock[];
  pullQuotes?: PullQuote[];
  sections?: InsightSection[];
};

export type InsightArticleProps = {
  article: Insight;
};

export type InsightTextBlock = {
  text?: string;
  superText?: string;
};

export type PullQuote = {
  quote?: string;
  cite?: string;
};

export type InsightSection = {
  number: string;
  kicker: string;
  title: string;
  paragraphs: InsightTextBlock[];
};