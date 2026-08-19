import BlogCard from "@/components/ui/BlogCard";
import { getInsightContentType } from "@/lib/content/collections/insights";
import type { BlogPostProps } from "./types";

const FILTER_TO_CONTENT_TYPE = {
  Articles: "article",
  "Case Studies": "caseStudy",
} as const;

const BlogPost =  ({ isActive, showMore, insights }: BlogPostProps) => {
  return (
    <>
      {insights
        .filter((post) => {
          if (post.featured) return false;
          if (isActive === "All") return true;
          const wanted = FILTER_TO_CONTENT_TYPE[isActive as keyof typeof FILTER_TO_CONTENT_TYPE];
          return wanted !== undefined && getInsightContentType(post) === wanted;
        })
        .slice(0, showMore)
        .map((post) => {
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
    </>
  );
};

export default BlogPost;
