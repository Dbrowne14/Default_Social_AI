import InsightsArticleHeader from "@/components/insights/insightsPage/InsightsArticleHeader";
import InsightsArticleBody from "@/components/insights/insightsPage/InsightsContent/InsightsArticleBody";
import InsightsArticleRelated from "@/components/insights/insightsPage/InsightsArticleRelated";

const Page = () => {
  return (
    <div data-screen-label="04 Insights · Article">
      <InsightsArticleHeader />
      <InsightsArticleBody />
      <InsightsArticleRelated />
    </div>
  );
};

export default Page;
