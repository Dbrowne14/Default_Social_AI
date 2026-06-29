import BlogCard from "@/components/ui/BlogCard";
import Button from "@/components/ui/Button";
import type { InsightArticleProps, Insight } from "@/types/insights";

type InsightsArticleRelatedProps = InsightArticleProps & {
  relatedArticles: Insight[];
};

const InsightsArticleRelated = ({
  article,
  relatedArticles,
}: InsightsArticleRelatedProps) => {
  const articleTag = article?.tag;

  return (
    <section data-screen-label="Related reading">
      <div className="container-custom">
        <div className="section-headings mb-6">
          <div className="section-title">
            <div className="eyebrow">Keep reading</div>
            <h2>Related field notes.</h2>
          </div>
          <p className="meta">
            More from the {articleTag} — the patterns behind the concierge, and
            where the value actually sits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-20 min-[600]:grid-cols-2 min-[900]:grid-cols-3 ">
          {relatedArticles?.map((article) => {
            return (
              <BlogCard
                tag={article.tag}
                date={article.date}
                author={article.author}
                readTime={article.readTime}
                title={article.title}
                excerpt={article.excerpt}
                slug={article.slug}
                key={article.title}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-14 h-fit">
          <Button text="All insights" link="/insights" variant="ghost" />
        </div>
      </div>
    </section>
  );
};

export default InsightsArticleRelated;
