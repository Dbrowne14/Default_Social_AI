import Button from "../ui/Button";
import type { Insight } from "@/types/collections/insights";

type FeaturedInsights = {
  featuredInsights: Insight
}

const InsightsFeatured = ({featuredInsights}:FeaturedInsights) => {
  const{date, tag, readTime, title, excerpt, author, slug} = featuredInsights;

  return (
    <section
      className="pt-14 md:pt-20 px-0 xl:px-15 bg-[linear-gradient(180deg,var(--ink-2),var(--ink))]"
      data-screen-label="Featured"
    >
      <div className="container-custom">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-0 xl:gap-14 items-stretch border border-line rounded-[20px] overflow-hidden [background:linear-gradient(180deg,var(--ink-2),var(--ink))]">
          <div className="  aspect-4/3
  xl:aspect-auto
  xl:min-h-fullrelative justify-end p-5 md:p-9 [background:radial-gradient(circle_at_30%_30%,color-mix(in_oklch,var(--accent)_25%,var(--ink-3)),transparent_55%),radial-gradient(circle_at_70%_70%,color-mix(in_oklch,var(--accent)_12%,var(--ink-3)),transparent_60%),repeating-linear-gradient(135deg,var(--ink-2)_0_14px,var(--ink-3)_14px_28px)]">


            <span className="inline-flex gap-2 py-1.5 px-3 rounded-[999px] bg-ink border border-line font-mono text-[10px] tracking-[0.12em] uppercase text-cream">
              <span className="text-accent">●</span> Featured ·{" "}
              {date}
            </span>
          </div>

          <div className="py-8 px-5 sm:px-7 md:py-14 md:px-14 flex flex-col gap-5 md:gap-6 bg-ink">
            <div className="meta flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] md:text-[11px] text-muted tracking-widest uppercase">
              <span>{tag}</span>
              <span>·</span>
              <span>{readTime}</span>
            </div>

            <h2 className="font-serif text-[clamp(22px,8.5vw,56px)] leading-[1.02]">
              {title}
            </h2>

            <p className="text-cream-2 text-[clamp(12px,3vw,18px)] leading-[1.55]">
              {excerpt}
            </p>

            <div className="flex flex-row sm:flex-row sm:items-end sm:justify-between gap-6 md:mt-6 mt-3">
              <div className="flex items-center gap-3 mt-2">
                <div className="w-9 h-9 rounded-[50%] bg-accent text-ink font-serif text-[18px] items-center justify-center hidden min-[1500px]:flex">
                  {author.initials}
                </div>

                <div className="flex flex-col font-mono text-[10px] md:text-[11px] tracking-widest uppercase text-cream-2 max-w-[22ch]">
                  <span className="font-bold">
                    {author.name} ·
                  </span>
                  <span className="">{author.role}</span>
                </div>
              </div>

              <Button
                link={`/insights/${slug}`}
                text="Read More"
                arrowVariant="primaryBlack"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default InsightsFeatured;
