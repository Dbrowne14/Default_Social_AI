import type { ActiveSetterProps } from "@/types";

const filterData = [
  "All",
  "AI Practice",
  "Web",
  "SEO",
  "Social",
  "Strategy",
  "Studio Ops",
];

const InsightsFilterToc = ({isActive, setIsActive}:ActiveSetterProps) => {

  const handleClick = (data: string) => {
    setIsActive(data);
  };
  return (
    <>
      {filterData.map((data) => {
        return (
          <button
            key={data}
            className={`py-2 px-3.5 rounded-[999px] border border-line ${isActive === data ? "bg-accent text-ink" : "text-cream-2 hover:border-accent hover:text-accent"} font-mono text-[clamp(10px,1vw,11px)] tracking-widest uppercase  cursor-pointer transition-colors duration-150 ease-in-out `}
            data-filter="all"
            onClick={() => handleClick(data)}
          >
            {data}
          </button>
        );
      })}
    </>
  );
};

export default InsightsFilterToc;
