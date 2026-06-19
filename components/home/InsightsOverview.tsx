import { insights } from "@/data/blogData";
import BlogCard from "../ui/BlogCard";
import Link from "next/link";

const InsightsOverview = () => {
  return (
    <section className="border-t border-t-line" data-screen-label="Insights">
      <div className="container-custom py-20">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">04 · Insights</div>
            <h2>
              Field notes from
              <br />
              the practice.
            </h2>
          </div>
          <p className="meta">
            Long-form thinking on agency operating models, what we&apos;ve shipped
            recently, and what&apos;s coming next. {"  "}
            <Link href="/insights" className="text-accent hover:underline">
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
