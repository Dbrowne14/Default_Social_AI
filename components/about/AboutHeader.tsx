const companyInfo = [
  {
    label: "Founded",
    value: "2016 · As part of Default Media Group",
  },
  {
    label: "HQ",
    value: "Brentford, London",
  },
  {
    label: "Team",
    value: "31 across 5 practices",
  },
  {
    label: "Group sibling",
    value: "Default Media · Default Studios",
  },
  {
    label: "AI practice",
    value: "Operational since 2025",
  },
];

const AboutHeader = () => {
  return (
    <header className=" pt-nav flex items-center   min-h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-100 blur-[140px]
bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklch,var(--accent)_40%,transparent),transparent_42%),radial-gradient(circle_at_85%_15%,color-mix(in_oklch,var(--accent-2)_48%,transparent),transparent_36%),radial-gradient(circle_at_50%_40%,color-mix(in_oklch,var(--accent-3)_22%,transparent),transparent_52%)]"
      />
      <div className="container-custom">
        <div className="mb-9 eyebrow">About</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end">
          <h1 className="font-serif text-[clamp(56px,9vw,140px)]">
            A studio
            <br />
            between
            <br />
            <em className="text-accent italic">signal</em>
            <br />
            and craft.
          </h1>
          <div>
            <p className="lede hidden md:block">
              Default Social is the digital, social and technology arm of the
              Default Media Group — a 10-year-old company with one studio in
              Brentford, one foot in the data, and both eyes on what&apos;s
              next.
            </p>
            <div className="flex flex-col gap-3 font-mono text-[11px] tracking-[0.08em] uppercase mt-10">
              {companyInfo.map((info, key) => {
                return (
                  <div
                    className="flex justify-between md:gap-6 py-1 md:py-3.5 border-b border-line"
                    key={key}
                  >
                    <span className="text-muted text-[clamp(10px,1vw,11px)]">{info.label}</span>
                    <span className="text-cream text-right text-[clamp(9px,1vw,11px)]">{info.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
