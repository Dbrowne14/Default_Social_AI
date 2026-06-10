import Button from "../ui/Button";
import BlogPost from "../ui/BlogPost";

const InsightsBlogPosts = () => {
  return (
    <section className="pt-10">
      <div className="container-custom">
        <div className="section-headings mb-6">
          <div className="section-title">
            <div className="eyebrow">Library · 36 essays</div>
            <h2>Recent reading.</h2>
          </div>
          <p className="meta">
            Updated weekly. Long-form by default — we'd rather publish one good
            essay than ten posts.
          </p>
        </div>

        <div
          className="grid grid-cols-1 xs520:grid-cols-2 md:grid-cols-3 gap-8 mt-6"
          id="articles-grid"
        >
          <BlogPost />
        </div>

        <div className="flex justify-center items-center mt-21">
            <Button link="/" text="Load more " variant="ghost" buttonDirection="down" />
        </div>
      </div>
    </section>
  );
};

export default InsightsBlogPosts;
