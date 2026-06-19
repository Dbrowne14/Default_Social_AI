import BlogCard from "@/components/ui/BlogCard";
import { insights } from "@/data/blogData";
import { ActiveProps } from "@/types";

type BlogStateProps = ActiveProps & {
  showMore: number;
}

const BlogPost = ({
  isActive,
  showMore,
}: BlogStateProps) => {
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
