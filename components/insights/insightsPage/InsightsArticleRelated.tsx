"use client";
import { usePathname } from "next/navigation";
import { insights } from "@/data/blogData";
import BlogCard from "@/components/ui/BlogCard";
import Button from "@/components/ui/Button";

const InsightsArticleRelated = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const articleTag = insights.find((post) => post.slug === slug)?.tag;
  const relatedArticles = insights?.filter(
    (post) => post.slug !== slug && post.tag === articleTag,
  );

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
