import BlogCard from "@/components/ui/BlogCard";
import type { BlogPostProps } from "./types";


const BlogPost =  ({ isActive, showMore, insights }: BlogPostProps) => {
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
