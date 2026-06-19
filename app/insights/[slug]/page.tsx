"use client";
import InsightsArticleHeader from "@/components/insights/insightsPage/InsightsArticleHeader";
import InsightsArticleBody from "@/components/insights/insightsPage/InsightsContent/InsightsArticleBody";
import InsightsArticleRelated from "@/components/insights/insightsPage/InsightsArticleRelated";
import { insights } from "@/data/blogData";
import { notFound } from "next/navigation";

export type InsightsArticleBodyProps = {
  params: {
    slug: string;
  };
};

const Page = async({ params }: InsightsArticleBodyProps) => {
  const {slug} = await params
  const article = insights.find((post) => post.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insights.filter(
    (post) => post.slug !== article.slug && post.tag === article.tag
  );
  return (
    <div data-screen-label="04 Insights · Article">
      <InsightsArticleHeader />
      <InsightsArticleBody article={article}/>
      <InsightsArticleRelated
        article={article}
        relatedArticles={relatedArticles}
      />
    </div>
  );
};

export default Page;
