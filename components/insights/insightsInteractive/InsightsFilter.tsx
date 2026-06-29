import InsightsFilterToc from "./InsightsFilterToc";
 import { ActiveFilterSetterProps } from "./types";

const InsightsFilter = ({
  isActive,
  setIsActive,
}: ActiveFilterSetterProps) => {
  return (
    <aside className="sticky top-22 py-4 [background:color-mix(in_oklch,var(--ink)_80%,transparent)] backdrop-blur-lg z-30 border-b border-line">
      <div className="container-thin">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono  text-[clamp(10px,1vw,11px)] tracking-[0.12em] uppercase text-muted mr-2 ">
          Filter<span className="text-accent-deep"> /</span>
          </span>
          <InsightsFilterToc isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
    </aside>
  );
};

export default InsightsFilter;
