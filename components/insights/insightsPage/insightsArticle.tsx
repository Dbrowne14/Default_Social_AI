import InsightsArticleHeader from "./InsightsArticleHeader";
import InsightsArticleBody from "./InsightsContent/InsightsArticleBody";
import InsightsArticleRelated from "./InsightsArticleRelated";

const insightsArticle = () => {
  return (
    <>
      <InsightsArticleHeader />
      <InsightsArticleBody/>
      <InsightsArticleRelated/>
    </>
  );
};

export default insightsArticle;
