import Link from "next/link";
import type { Insight } from "@/types/collections/insights";

type TeamMemberInsightsProps = {
  name: string;
  work: Insight[];
};

const TeamMemberInsights = ({ name, work }: TeamMemberInsightsProps) => {
  if (work?.length === 0) {
    return null;
  }

  const firstName = name.trim().split(/\s+/)[0] ?? name;

  return (
    <section data-screen-label="Team member insights">
      <div className="container-custom">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">Selected thinking</div>

            <h2 className="text-[clamp(30px,4.8vw,60px)] leading-[0.94] tracking-tight">
              Ideas from
              <br />
              the practice.
            </h2>
          </div>

          <p className="meta max-w-[32ch]">
            Field notes and practical perspectives {firstName} has written for
            the studio.
          </p>
        </div>

        <div className="flex flex-col">
          {work?.slice(0, 5).map((article, index) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              aria-label={`Read ${article.title}`}
              className="
    group grid grid-cols-[24px_1fr_auto]
    gap-x-4 gap-y-2 border-t border-line py-7
    last:border-b
    md:grid-cols-[56px_1.4fr_1fr_auto]
    md:items-center md:gap-x-5 md:py-6
    md:hover:pl-3
  "
            >
              <span className="col-start-1 row-start-1 pt-1 text-[10px] tracking-widest text-muted md:row-span-1 md:pt-0">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="col-start-2 row-start-1 font-serif text-[clamp(21px,6vw,26px)] leading-[1.05] md:row-span-1 md:text-[clamp(22px,2.2vw,29px)]">
                {article.title}
              </span>

              <span className="col-start-2 row-start-2 text-[10px] uppercase tracking-[0.08em] text-muted md:col-start-3 md:row-span-1 md:text-cream-2">
                {article.tag} · {article.date}
              </span>

              <span className="col-start-3 row-start-1 row-span-2 self-start justify-self-end md:col-start-4 md:row-span-1 md:self-center">
                <span
                  aria-hidden="true"
                  className="flex size-8.5 items-center justify-center rounded-full border border-line text-[13px] text-cream-2 transition-[transform,background,color,border-color] duration-200 ease-in-out
                  group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                  group-hover:border-accent group-hover:bg-accent
                  group-hover:text-on-accent
                  "
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberInsights;
