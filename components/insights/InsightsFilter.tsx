const filterData = [
  "All",
  "AI Practice",
  "Web",
  "SEO",
  "Social",
  "Strategy",
  "Studio Ops",
];

const InsightsFilter = () => {
  return (
    <aside className="sticky top-22 py-4 [background:color-mix(in_oklch,var(--ink)_80%,transparent)] backdrop-blur-lg z-30 border-b border-line">
      <div className="container-thin">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted mr-2 ">
            Filter by
          </span>
          {filterData.map((data) => {
            return (
              <button
                key={data}
                className="py-2 px-3.5 rounded-[999px] border border-line font-mono text-[11px] tracking-widest uppercase text-cream-2 cursor-pointer transition-colors duration-150 ease-in-out hover:border-accent hover:text-accent"
                data-filter="all"
              >
                {data}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default InsightsFilter;
