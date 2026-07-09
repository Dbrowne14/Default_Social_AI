import BlogCard from "@/components/ui/BlogCard";
import { getAllInsights } from "@/lib/content/collections/insights";
import { BlogStateProps } from "./types";

const BlogPost = async ({ isActive, showMore }: BlogStateProps) => {
  const insights = await getAllInsights();
  return (
    <>
      {insights
        .filter(
          (post) =>
            !post.featured && (isActive === "All" || post.tag === isActive),
        )
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
