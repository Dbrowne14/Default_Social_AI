import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightsFilter from "@/components/insights/InsightsFilter";

const Page = () => {
  return (
    <div data-screen-label="03 Insights">
      <InsightsHeader />
      <InsightsFilter />
      <InsightsHeader />
    </div>
  );
};

export default Page;
