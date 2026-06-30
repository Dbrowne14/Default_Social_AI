import { insights } from "@/data/blogData";
import BlogCard from "../ui/BlogCard";
import Link from "next/link";
import { getInsightsOverview } from "@/lib/content/homePage";
import RichTitle from "../ui/RichTitle";

const InsightsOverview = async () => {
  const { title, eyebrow, meta } = await getInsightsOverview();
  return (
    <section className="border-t border-t-line" data-screen-label="Insights">
      <div className="container-custom py-20">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">{eyebrow}</div>
            <h2>
              <RichTitle title={title} />
            </h2>
          </div>
          <p className="meta">
            {meta}
            <Link href="/insights" className="text-accent hover:underline">
              {" "}
              All insights →
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.slice(0, 3).map((post) => {
            const { author, tag, title, excerpt, date, readTime, slug } = post;
            return (
              <BlogCard
                author={author}
                tag={tag}
                title={title}
                excerpt={excerpt}
                date={date}
                readTime={readTime}
                slug={slug}
                key={title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsightsOverview;
