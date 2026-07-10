import SingleStatBlock from "@/components/ui/SingleStatBlock";
import SocialsFrame from "@/components/ui/SocialsFrame";
import type { InsightArticleProps } from "@/types/collections/insights";
import Link from "next/link";

const InsightsArticleHeader = ({ article }: InsightArticleProps) => {
  const {
    title,
    tag,
    slug,
    author,
    readTime,
    excerpt,
    date,
    subject,
    imageCaption,
  } = article;

  return (
    <header
      className="pt-nav min-h-dvh md:min-h-screenflex items-center"
      data-screen-label="Article header"
    >
      <div className="container-thin">
        <nav
          className="flex items-center gap 2.5 font-mono text-[11px] tracking-[0.12em] uppercase text-muted mt-4 mb-8 flex-wrap md:no-wrap md:mb-20"
          aria-label="Breadcrumb"
        >
          <Link
            href="/insights"
            className="text-muted transition-colors duration-150 ease-in-out hover:text-accent"
          >
            {slug}
          </Link>
          <span className="opacity-[0.5]">/</span>
          <Link
            href="/insights"
            className="text-muted transition-colors duration-150 ease-in-out hover:text-accent"
          >
            {tag}
          </Link>
          <span className="opacity-[0.5]">/</span>
          <span className="text-accent-deep italic ">{subject}</span>
        </nav>

        <div className="max-w-245">
          <div className="flex items-center flex-wrap text-[11px] gap-3.5 font-mono tracking-[0.12em] uppercase text-muted mb-7">
            <span className="pill-ai">{tag}</span>
            <span className="font-mono text-muted">Essay · {readTime} ·</span>
            <span className="font-mono text-muted">{date}</span>
          </div>
          <h1 className="font-serif text-[clamp(40px,6.4vw,88px)] leading-none tracking-[-0.02em] max-w-[20ch]">
            {title}
          </h1>
          <p className="font-serif text-[clamp(21px,2.1vw,30px)] leading-[1.4] text-cream-2 max-w-[80ch] mt-6 md:mt-8">
            {excerpt}
          </p>
        </div>

        <div className="flex items-center gap-y-4.5 gap-x-7 md:gap-7 flex-wrap mt-8 md:mt-11 py-6 border-y border-line">
          <div className="flex items-center gap-3.5">
            <div className="w-11.5 h-11.5 rounded-[50%] bg-accent text-on-accent font-serif text-[24px] flex items-center justify-center shrink-0">
              {author.initials}
            </div>
            <div className="flex flex-col gap-0.75 ">
              <span className="font-sans font-semibold text-[15px] text-cream">
                {author.name}
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted">
                {author.role}
              </span>
            </div>
          </div>
          <SingleStatBlock statsHeader="Four Layers" stat="The pattern" />
          <SingleStatBlock statsHeader="2,940 words" stat="Long-form" />

          <div className="md:ml-auto flex gap-2 ml-0" aria-label="Share">
            <SocialsFrame link="" logo="in" />
            <SocialsFrame link="" logo="↗" />
          </div>
        </div>

        <figure className="md:mt-14 mt-10">
          <div className="md:aspect-21/9 aspect-4/3 border border-line rounded-[18px] relative overflow-hidden [background:radial-gradient(circle_at_26%_32%,color-mix(in_oklch,var(--accent)_20%,var(--ink-3)),transparent_52%),radial-gradient(circle_at_76%_70%,color-mix(in_oklch,var(--accent-2)_18%,var(--ink-3)),transparent_56%),repeating-linear-gradient(135deg,var(--ink-2)_0_15px,var(--ink-3)_15px_30px)]">
            <span className="absolute inset-0 flex items-center justify-center font-serif text-[clamp(120px,20vw,280px)] text-cream opacity-[0.55] tracking-[-0.04em]">
              ⌁
            </span>
            <span className="absolute left-5.5 bottom-4.5 font-mono text-[10px] tracking-[0.12em] uppercase text-muted py-1.25 px-2.5 rounded-md border border-line">
              cover image · commissioned illustration
            </span>
          </div>
          <figcaption className="font-mono text-[11px] tracking-[0.06em] text-muted mt-3.5 uppercase">
            {imageCaption}
          </figcaption>
        </figure>
      </div>
    </header>
  );
};

export default InsightsArticleHeader;
