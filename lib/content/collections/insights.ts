import { insightsQuery } from "@/sanity/queries/collections/insights";
import { client } from "@/sanity/lib/client";
import type { Insight, InsightContentType } from "@/types/collections/insights";
import { SANITY_FETCH_OPTIONS } from "@/sanity/lib/fetchOptions";

// Entries published before the contentType field existed have no value yet;
// default them to "article" until re-saved in Studio.
export const getInsightContentType = (insight: Insight): InsightContentType =>
  insight.contentType ?? "article";

export const INSIGHT_CONTENT_TYPE_LABEL: Record<InsightContentType, string> = {
  article: "Article",
  caseStudy: "Case Study",
};

export const getAllInsights = async (): Promise<Insight[]> => {
  return await client.fetch(insightsQuery, {}, SANITY_FETCH_OPTIONS);
};

export const getFeaturedInsights = async () => {
  const insights = await getAllInsights()
  return insights.find((blog) => blog.featured);
};

export const getInsightBySlug = async (slug: string) => {
  const insights = await getAllInsights()
  return insights.find((post) => post.slug === slug) ?? null;
};
