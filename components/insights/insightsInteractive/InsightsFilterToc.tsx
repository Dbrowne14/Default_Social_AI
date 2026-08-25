import { getInsightContentType } from "@/lib/content/insightUtils";
import type { LibraryFilterProps } from "./types";

const LIBRARY_FILTERS = ["All", "Articles", "Case Studies"] as const;

const InsightsFilterToc = ({ isActive, setIsActive, insights }: LibraryFilterProps) => {
  const browsable = insights.filter((insight) => !insight.featured);
  const counts: Record<(typeof LIBRARY_FILTERS)[number], number> = {
    All: browsable.length,
    Articles: browsable.filter((insight) => getInsightContentType(insight) === "article").length,
    "Case Studies": browsable.filter((insight) => getInsightContentType(insight) === "caseStudy").length,
  };

  return (
    <>
      {LIBRARY_FILTERS.map((filter) => {
        const active = isActive === filter;
        return (
          <button
            key={filter}
            type="button"
            className={`flex cursor-pointer flex-col gap-1.5 pb-1 text-[clamp(9px,1vw,10px)] tracking-widest uppercase transition-colors duration-150 ease-in-out ${
              active ? "text-accent" : "text-cream-2 hover:text-accent"
            }`}
            onClick={() => setIsActive(filter)}
          >
            <span>
              {filter} <span className={active ? "text-accent" : "text-muted"}>{counts[filter]}</span>
            </span>
            <span className={`h-px w-full ${active ? "bg-accent" : "bg-transparent"}`} aria-hidden="true" />
          </button>
        );
      })}
    </>
  );
};

export default InsightsFilterToc;
