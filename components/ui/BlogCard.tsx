import type { Insight } from "@/types/collections/insights";
import Link from "next/link";

const BlogCard = ({
  tag,
  date,
  author,
  readTime,
  title,
  excerpt,
  slug,
}: Insight) => {
  const ai = tag === "AI Practice";
  return (
<article
  className="flex cursor-pointer flex-col gap-4.5 border-t border-line pt-6 transition-transform duration-200 ease-in-out hover:-translate-y-0.5"
  data-cat="seo"
>
  <div className="relative aspect-4/3 overflow-hidden rounded-[14px] border border-line [background:radial-gradient(circle_at_30%_40%,color-mix(in_oklch,var(--accent)_22%,var(--ink-3)),transparent_60%),repeating-linear-gradient(135deg,var(--ink-2)_0_12px,var(--ink-3)_12px_24px)]">
    <span
      className={`${ai ? "pill-ai" : "pill"} absolute left-3.5 top-3.5 bg-ink`}
    >
      {ai && <span>·</span>}
      {tag}
    </span>

    <span className="absolute inset-0 flex items-center justify-center font-serif text-[96px] tracking-[-0.04em] text-cream opacity-[0.65]">
      ⌬
    </span>
  </div>

  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-dmSans text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
    <span>By {author.role}</span>
    <span aria-hidden="true">·</span>
    <span>{date}</span>
    <span aria-hidden="true">·</span>
    <span>{readTime}</span>
  </div>

  <h3 className="heading-editorial text-[clamp(24px,2vw,32px)]">
    {title}
  </h3>

  <p className="text-[15px] leading-normal text-cream-2">{excerpt}</p>

  <Link
    href={`/insights/${slug}`}
    className="mt-auto pt-3 font-dmSans text-[11px] font-semibold uppercase tracking-[0.16em] text-accent"
  >
    Read article →
  </Link>
</article>
  );
};

export default BlogCard;
