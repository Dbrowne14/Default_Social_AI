import type { Person } from "./person";

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
  author: Person;
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
