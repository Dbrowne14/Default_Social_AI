import Button from "../ui/Button";
import { insights } from "@/data/blogData";

const InsightsFeatured = () => {
  const featuredArticle = insights.find((blog) => blog.featured);
  return (
    <section className="pt-20 px-0 xl:px-15 xl bg-[linear-gradient(180deg,var(--ink-2),var(--ink))]" data-screen-label="Featured">
      <div className="container-custom">
        <article className="grid grid-cols-1 xl:grid-cols-2 gap-0 xl:gap-14 items-stretch border border-line rounded-[20px] overflow-hidden [background:linear-gradient(180deg,var(--ink-2),var(--ink))]">
          <div className="min-h-80 md:min-h-120 relative justify-end p-9 [background:radial-gradient(circle_at_30%_30%,color-mix(in_oklch,var(--accent)_25%,var(--ink-3)),transparent_55%),radial-gradient(circle_at_70%_70%,color-mix(in_oklch,var(--accent)_12%,var(--ink-3)),transparent_60%),repeating-linear-gradient(135deg,var(--ink-2)_0_14px,var(--ink-3)_14px_28px)]">
            <span className="absolute top-9 right-9 font-serif text-[clamp(64px,9vw,140px)] text-cream opacity-[0.7] tracking-[-0.04]">
              ⌁
            </span>
            <span className="inline-flex gap-2 py-1.5 px-3 rounded-[999px] bg-ink border border-line font-mono text-[10px] tracking-[0.12em] uppercase text-cream flex-start">
              <span className="text-accent">●</span> Featured ·{" "}
              {featuredArticle?.date}
            </span>
          </div>
          <div className="py-14 px-2 md:px-14 flex flex-col gap-6 bg-ink">
            <div className="meta flex gap-4.5 font-mono text-[11px] text-muted tracking-widest uppercase">
              <span>{featuredArticle?.tag}</span>
              <span>·</span>
              <span>{featuredArticle?.readTime}</span>
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,56px)]">
              {featuredArticle?.title}
            </h2>
            <p className="text-cream-2 text-[15px] leading-[1.55]">
              {featuredArticle?.excerpt}
            </p>
            <div className="flex items-center flex-col gap-3 mt-2">
              <div className="w-9 h-9 rounded-[50%] bg-accent text-ink font-serif text-[18px]  items-center justify-center hidden xl:flex">
                {featuredArticle?.authorInitials}
              </div>
              <div className="font-mono text-[11px] tracking-widest uppercase text-cream-2">
                {featuredArticle?.author} · {featuredArticle?.authorRole}
              </div>
            </div>

            <div className="flex gap-3 mt-3">
              <Button
                link={`/insights/${featuredArticle?.slug}`}
                text="Read the essay"
                arrowVariant="primaryBlack"
              />
              <Button link="/" text="Open in reader" variant="ghost" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default InsightsFeatured;
