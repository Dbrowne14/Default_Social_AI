import InsightsArticleHeader from "@/components/insights/insightsPage/InsightsArticleHeader";
import InsightsArticleBody from "@/components/insights/insightsPage/InsightsContent/InsightsArticleBody";
import InsightsArticleRelated from "@/components/insights/insightsPage/InsightsArticleRelated";
import { insights } from "@/data/insightsData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getInsightBySlug } from "@/lib/content/collections/insights";

export type InsightsArticleBodyProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: InsightsArticleBodyProps): Promise<Metadata> {
  const { slug } = await params;

  const article = await getInsightBySlug(slug);

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

const Page = async ({ params }: InsightsArticleBodyProps) => {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insights.filter(
    (post) => post.slug !== article.slug && post.tag === article.tag,
  );
  return (
    <div data-screen-label="04 Insights · Article">
      <InsightsArticleHeader article={article} />
      <InsightsArticleBody article={article} />
      <InsightsArticleRelated
        article={article}
        relatedArticles={relatedArticles}
      />
    </div>
  );
};

export default Page;
