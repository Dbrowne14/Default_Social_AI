import BlogPost from "../insights/BlogPost";

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
            Long-form thinking on agency operating models, what we've shipped
            recently, and what's coming next. {"  "}
            <a href="/insights" className="text-accent hover:underline">
              All insights →
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogPost />
        </div>
      </div>
    </section>
  );
};

export default InsightsOverview;
