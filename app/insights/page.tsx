import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightsFilter from "@/components/insights/InsightsFilter";
import InsightsFeatured from "@/components/insights/InsightsFeatured";

const Page = () => {
  return (
    <div data-screen-label="03 Insights">
      <InsightsHeader />
      <InsightsFilter />
      <InsightsFeatured />
      <section className="pt-10">
        <div className="container-custom">
          <div className="section-headings mb-6">
            <div className="section-title">
              <div className="eyebrow">Library · 36 essays</div>
              <h2>Recent reading.</h2>
            </div>
            <p className="meta">
              Updated weekly. Long-form by default — we'd rather publish one
              good essay than ten posts.
            </p>
          </div>

          <div
            className="grid grid-cols-1 xs520:grid-cols-2 md:grid-cols-3 gap-8 mt-6"
            id="articles-grid"
          >
            <article
              className="flex flex-col gap-4.5 pt-6 border-t border-line cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-y-0.5"
              data-cat="seo"
            >
              <div className="aspect-4/3 rounded-[14px] border border-line relative overflow-hidden [background:radial-gradient(circle_at_30%_40%,color-mix(in_oklch,var(--accent)_22%,var(--ink-3)),transparent_60%),repeating-linear-gradient(135deg,var(--ink-2)_0_12px,var(--ink-3)_12px_24px)]">
                <span className="pill bg-ink absolute top-3.5 left-3.5">SEO</span>
                <span className="absolute inset-0 flex items-center justify-center font-serif text-[96px] text-cream opacity-[0.65] tracking-[-0.04em]">A</span>
              </div>
              <div className="meta flex gap-3 ">
                <span>By David Browne</span>
                <span>·</span>
                <span>Apr 2026</span>
                <span>·</span>
                <span>6 min</span>
              </div>
              <h3 className="serif">
                Topic clusters in the age of answer engines.
              </h3>
              <p className="ex">
                How to restructure content for sites that need to be both
                Google-friendly and LLM-citable — without doubling the
                production cost.
              </p>
              <span className="read">Read article →</span>
            </article>
          </div>

          <div className="display: flex; justify-content: center; margin-top: 64px;">
            <a className="btn ghost" href="#">
              Load more <span className="arr">↓</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
