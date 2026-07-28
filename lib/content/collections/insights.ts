import { insightsQuery } from "@/sanity/queries/collections/insights";
import { client } from "@/sanity/lib/client";
import type { Insight } from "@/types/collections/insights";
import { SANITY_FETCH_OPTIONS } from "@/sanity/lib/fetchOptions";

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
