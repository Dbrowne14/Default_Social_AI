import { client } from "@/sanity/lib/client";
import { insightsPageQuery } from "@/sanity/queries/pages/insgihtsPage";
import type { InsightsPage } from "@/types/pages/insightsPage";
import { SANITY_FETCH_OPTIONS } from "@/sanity/lib/fetchOptions";

export const getInsightsPage = async (): Promise<InsightsPage> => {
  return await client.fetch<InsightsPage>(insightsPageQuery, {}, SANITY_FETCH_OPTIONS);
};
