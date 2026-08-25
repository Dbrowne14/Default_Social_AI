import "server-only";
import { insightsQuery } from "@/sanity/queries/collections/insights";
import { sanityFetch } from "@/sanity/lib/live";

import type {
  Insight,
} from "@/types/collections/insights";

export const getAllInsights = async (): Promise<Insight[]> => {
  const result = await sanityFetch({
    query: insightsQuery,
  });

  return result.data as Insight[];
};

export const getFeaturedInsights = async () => {
  const insights = await getAllInsights();

  return insights.find((insight) => insight.featured);
};

export const getInsightBySlug = async (slug: string) => {
  const insights = await getAllInsights();

  return insights.find((insight) => insight.slug === slug) ?? null;
};