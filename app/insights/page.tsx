import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightsFilter from "@/components/insights/InsightsFilter";
import InsightsFeatured from "@/components/insights/InsightsFeatured";

const Page = () => {
  return (
    <div data-screen-label="03 Insights">
      <InsightsHeader />
      <InsightsFilter />
      <InsightsFeatured />
    </div>
  );
};

export default Page;
