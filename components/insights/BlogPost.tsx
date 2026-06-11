import BlogCard from "../ui/BlogCard";
import { insights } from "@/data/blogData";
const BlogPost = () => {
  return (
    <>
      {insights
        .filter((post) => !post.featured)
        .map((post, key) => {
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
