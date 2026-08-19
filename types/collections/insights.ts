//types for Insights data schema
import type { Person } from "./person";

export type InsightContentType = "article" | "caseStudy";

export type Insight = {
  featured?: boolean;
  subject?: string;
  date: string;
  // Optional: existing published entries predate this field until re-saved in Studio.
  // Treat a missing value as "article" (see getInsightContentType in lib/content/collections/insights.ts).
  contentType?: InsightContentType;
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
