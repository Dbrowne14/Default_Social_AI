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
    <header className=" pt-20 md:pt-50 md:pb-20 border-b border-line min-h-screen">
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
            <p className="lede">
              Default Social is the digital, social and technology arm of the
              Default Media Group — a 10-year-old company with one studio in
              Brentford, one foot in the data, and both eyes on what's next.
            </p>
            <div className="flex flex-col gap-3 font-mono text-[11px] tracking-[0.08em] uppercase mt-10">
              {companyInfo.map((info, key) => {
                return (
                  <div
                    className="flex justify-between gap-6 py-3.5 border-b border-line"
                    key={key}
                  >
                    <span className="text-muted">{info.label}</span>
                    <span className="text-cream text-right">{info.value}</span>
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
