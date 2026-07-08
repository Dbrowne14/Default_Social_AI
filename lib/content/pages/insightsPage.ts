import { client } from "@/sanity/lib/client";
import { insightsPageQuery } from "@/sanity/queries/pages/insgihtsPage";
import type { InsightsPage } from "@/types/pages/insightsPage";

export const getInsightsPage = async (): Promise<InsightsPage> => {
  return await client.fetch<InsightsPage>(insightsPageQuery);
};
