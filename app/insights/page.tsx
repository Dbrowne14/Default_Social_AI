import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightsInteractive from "@/components/insights/insightsInteractive/InsightsInteractive";
import InsightsFeatured from "@/components/insights/InsightsFeatured";

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
