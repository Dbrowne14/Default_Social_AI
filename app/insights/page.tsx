import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightsFilter from "@/components/insights/InsightsFilter";
import InsightsFeatured from "@/components/insights/InsightsFeatured";
import InsightsBlogPosts from "@/components/insights/InsightsBlogPosts";

const Page = () => {
  return (
    <div data-screen-label="03 Insights">
      <InsightsHeader />
      <InsightsFeatured />
      <InsightsFilter />
      <InsightsBlogPosts/>
    </div>
  );
};

export default Page;
