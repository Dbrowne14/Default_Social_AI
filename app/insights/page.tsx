import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightsInteractive from "@/components/insights/insightsInteractive/InsightsInteractive";
import InsightsFeatured from "@/components/insights/InsightsFeatured";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes on AI, websites, automation and digital strategy.",
};

const Page = () => {
  return (
    <div data-screen-label="03 Insights">
      <InsightsHeader />
      <InsightsFeatured />
      <InsightsInteractive/>
    </div>
  );
};

export default Page;
