import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightsInteractive from "@/components/insights/insightsInteractive/InsightsInteractive";
import InsightsFeatured from "@/components/insights/InsightsFeatured";
import type { Metadata } from "next";
import { getInsightsPage } from "@/lib/content/insightsPage";

export const metadata: Metadata = {
  title: "Insights",
  description: "Field notes on AI, websites, automation and digital strategy.",
};

const Page = async () => {
  const insightsPage = getInsightsPage();
  return (
    <div data-screen-label="03 Insights">
      <InsightsHeader insightsHeader={insightsPage.insightsHeader} />
      <InsightsFeatured />
      <InsightsInteractive />
    </div>
  );
};

export default Page;
