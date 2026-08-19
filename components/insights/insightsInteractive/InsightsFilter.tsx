import InsightsFilterToc from "./InsightsFilterToc";
import type { LibraryFilterProps } from "./types";

const InsightsFilter = ({ isActive, setIsActive, insights }: LibraryFilterProps) => {
  const browsable = insights.filter((insight) => !insight.featured);

  return (
    <aside className="sticky top-nav py-4 [background:color-mix(in_oklch,var(--ink)_90%,transparent)] backdrop-blur-lg z-30">
      <div className="container-thin flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div className="flex flex-wrap items-center gap-6">
          <InsightsFilterToc isActive={isActive} setIsActive={setIsActive} insights={insights} />
        </div>

        <span className="text-[clamp(9px,1vw,10px)] tracking-widest uppercase text-muted">
          {browsable.length} pieces · Newest first
        </span>
      </div>
    </aside>
  );
};

export default InsightsFilter;
