
import BlogCard from "../ui/BlogCard";
import Link from "next/link";
import type { SectionIntro } from "@/types/shared";
import RichTitle from "../ui/RichTitle";
import type { Insight } from "@/types/collections/insights";

type InsightsOverviewProps = {
  section: SectionIntro;
  insights: Insight[];
};

const InsightsOverview = ({ section, insights }: InsightsOverviewProps) => {
  const { title, eyebrow, meta } = section;
  const featuredInsight = insights.find((post) => post.featured);
const displayedInsights = insights.slice(0, 3);
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

<div className="620:hidden">
  {featuredInsight && (
    <BlogCard
      author={featuredInsight.author}
      tag={featuredInsight.tag}
      title={featuredInsight.title}
      excerpt={featuredInsight.excerpt}
      date={featuredInsight.date}
      readTime={featuredInsight.readTime}
      slug={featuredInsight.slug}
      image={featuredInsight.image}
    />
  )}
</div>

{/* 620px and above: first three insights */}
<div className="hidden 620:grid 620:grid-cols-2 gap-8 min-[1100px]:grid-cols-3">
  {displayedInsights.map((post) => {
    const { author, tag, title, excerpt, date, readTime, slug, image } = post;

    return (
      <BlogCard
        key={slug}
        author={author}
        tag={tag}
        title={title}
        excerpt={excerpt}
        date={date}
        readTime={readTime}
        slug={slug}
        image={image}
      />
    );
  })}
</div>
      </div>
    </section>
  );
};

export default InsightsOverview;
