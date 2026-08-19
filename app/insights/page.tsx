import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightsIntro from "@/components/insights/InsightsIntro";
import InsightsInteractive from "@/components/insights/insightsInteractive/InsightsInteractive";
import InsightsFeatured from "@/components/insights/InsightsFeatured";
import type { Metadata } from "next";
import { getInsightsPage } from "@/lib/content/pages/insightsPage";
import {
  getAllInsights,
  getFeaturedInsights,
} from "@/lib/content/collections/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Field notes on AI, websites, automation and digital strategy.",
};

const Page = async () => {
  const insightsPage = await getInsightsPage();
  const featureInsights = await getFeaturedInsights();
  const DEFAULT_INSIGHTS_INTRO = {
  eyebrow: "Insights",
  title: "Articles & Case Studies.",
  meta: "Ideas, observations and practical lessons from building digital products.",
};
  if (!featureInsights) {
    return null;
  }
  const insights = await getAllInsights();
  return (
    <div data-screen-label="03 Insights">
      <InsightsHeader insightsHeader={insightsPage.insightsHeader} />
      <InsightsIntro intro={insightsPage.articlesIntro ?? DEFAULT_INSIGHTS_INTRO} />
      <InsightsFeatured featuredInsights={featureInsights} />
      <InsightsInteractive insights={insights} />
    </div>
  );
};

export default Page;
