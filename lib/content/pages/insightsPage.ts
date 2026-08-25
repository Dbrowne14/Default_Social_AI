import { sanityFetch } from "@/sanity/lib/live";
import { insightsPageQuery } from "@/sanity/queries/pages/insightsPage";
import type { InsightsPage } from "@/types/pages/insightsPage";

export const getInsightsPage = async (): Promise<InsightsPage> => {
  const { data } = await sanityFetch({
    query: insightsPageQuery,
  });

  return data as InsightsPage;
};