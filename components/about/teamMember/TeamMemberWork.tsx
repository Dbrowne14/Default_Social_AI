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

            <h2 className="text-[clamp(30px,4.8vw,60px)] leading-[0.94] tracking-[-0.025em]">
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
          {work?.map((article, index) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              aria-label={`Read ${article.title}`}
              className="group grid grid-cols-[40px_1fr] items-center gap-x-5 gap-y-3 border-t border-line py-8 transition-[padding] duration-200 ease-in-out last:border-b hover:pl-3 motion-reduce:transition-none md:grid-cols-[56px_1.4fr_1fr_auto] md:py-6"
            >
              <span className="text-[11px] tracking-[0.1em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="col-span-1 font-serif text-[clamp(22px,2.2vw,29px)] leading-[1.05]">
                {article.title}
              </span>

              <span className="col-start-2 text-[11px] uppercase tracking-[0.08em] text-cream-2 md:col-start-3">
                {article.tag} · {article.date}
              </span>

              <span className="col-start-2 flex justify-self-start md:col-start-4 md:justify-self-end">
                <span
                  aria-hidden="true"
                  className="flex size-8.5 items-center justify-center rounded-full border border-line text-[13px] text-cream-2 transition-[transform,background,color,border-color] duration-200 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent motion-reduce:transform-none motion-reduce:transition-none"
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
