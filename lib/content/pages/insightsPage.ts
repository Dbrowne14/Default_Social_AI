import { client } from "@/sanity/lib/client";
import { insightsPageQuery } from "@/sanity/queries/pages/insgihtsPage";

import { insightsPage as staticInsightsPage } from "@/data/insightsPage";
import type { InsightsPage } from "@/types/pages/insightsPage";

export const getInsightsPage = async (): Promise<InsightsPage> => {
  const insightsPage = await client.fetch<InsightsPage | null>(
    insightsPageQuery
  );

  return insightsPage ?? staticInsightsPage;
};