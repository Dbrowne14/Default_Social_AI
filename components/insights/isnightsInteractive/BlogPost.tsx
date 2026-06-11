import BlogCard from "@/components/ui/BlogCard";
import { insights } from "@/data/blogData";

const BlogPost = ({ isActive }: { isActive: string }) => {
  return (
    <>
      {insights
        .filter(
          (post) =>
            !post.featured && (isActive === "All" || post.tag === isActive),
        )
        .map((post) => {
          const { author, tag, title, excerpt, date, readTime, href } = post;
          return (
            <BlogCard
              author={author}
              tag={tag}
              title={title}
              excerpt={excerpt}
              date={date}
              readTime={readTime}
              href={href}
              key={title}
            />
          );
        })}
    </>
  );
};

export default BlogPost;
