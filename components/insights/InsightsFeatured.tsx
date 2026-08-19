import Button from "../ui/Button";
import { INSIGHT_CONTENT_TYPE_LABEL, getInsightContentType } from "@/lib/content/collections/insights";
import type { Insight } from "@/types/collections/insights";

type FeaturedInsights = {
  featuredInsights: Insight
}

const InsightsFeatured = ({featuredInsights}:FeaturedInsights) => {
  const{date, tag, readTime, title, excerpt, author, slug} = featuredInsights;
  const contentType = getInsightContentType(featuredInsights);
  const contentTypeLabel = INSIGHT_CONTENT_TYPE_LABEL[contentType];

  return (
    <section
      className="px-0 xl:px-15"
      data-screen-label="Featured"
    >
      <div className="container-custom">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-0 xl:gap-14 items-stretch border border-line rounded-[20px] overflow-hidden [background:linear-gradient(180deg,var(--ink-2),var(--ink))]">
          <div className="  aspect-4/3
  xl:aspect-auto
  xl:min-h-fullrelative items-start justify-start p-5 md:p-9 [background:radial-gradient(circle_at_30%_30%,color-mix(in_oklch,var(--accent)_25%,var(--ink-3)),transparent_55%),radial-gradient(circle_at_70%_70%,color-mix(in_oklch,var(--accent)_12%,var(--ink-3)),transparent_60%),repeating-linear-gradient(135deg,var(--ink-2)_0_14px,var(--ink-3)_14px_28px)]">

            <span className="inline-flex gap-2 py-1.5 px-3 rounded-[999px] bg-ink border border-line text-[10px] tracking-[0.12em] uppercase text-cream">
              Featured {contentTypeLabel}
            </span>
          </div>

          <div className="py-8 px-5 sm:px-7 md:py-14 md:px-14 flex flex-col gap-5 md:gap-6 bg-ink">
            <div className="meta flex flex-wrap gap-x-4 gap-y-1 text-[10px] md:text-[11px] text-muted tracking-widest uppercase">
              <span>{contentTypeLabel}</span>
              <span>·</span>
              <span>{tag}</span>
              <span>·</span>
              <span>{date}</span>
              <span>·</span>
              <span>{readTime}</span>
            </div>

            <h2 className="font-serif font-normal tracking-[-0.02em] text-[clamp(26px,5vw,56px)] leading-[1.02]">
              {title}
            </h2>

            <p className="text-cream-2 text-[clamp(12px,3vw,18px)] leading-[1.55]">
              {excerpt}
            </p>

            <div className="flex flex-col gap-5 md:gap-6 md:mt-6 mt-3">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[50%] bg-accent text-ink heading-display tracking-tight font-light text-[18px]">
                  {author.initials}
                </div>

                <div className="text-[8px] md:text-[10px] tracking-widest uppercase text-cream-2">
                  <span className="font-bold">{author.name}</span>
                  <span className="text-muted"> · {author.role}</span>
                </div>
              </div>

              <div>
                <Button
                  link={`/insights/${slug}`}
                  text={contentType === "caseStudy" ? "Read the case study" : "Read the essay"}
                  arrowVariant="primaryBlack"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default InsightsFeatured;
