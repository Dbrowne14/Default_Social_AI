export const groupStructure = [
  {
    type: "parent",
    label: "Group",
    name: "Default Media Group",
    description:
      "A privately-held media, marketing and technology group founded in 2016. Three sibling studios operate beneath one shared spine of finance, AI, data and people.",
  },

  {
    type: "self",
    label: "▍ This studio",
    name: "Default Social",
    description:
      "Digital, social, technology & AI. Web builds, SEO, social systems, viral campaign IP, marketing strategy, AI integration.",
  },

  {
    type: "sibling",
    label: "Sibling",
    name: "Default Media",
    description:
      "Above-the-line media planning, partnerships, sponsorships and broadcast — the group's traditional media engine.",
  },

  {
    type: "sibling",
    label: "Sibling",
    name: "Default Studios",
    description:
      "Brand, identity, packaging and editorial — the group's creative house, supplying craft into every engagement.",
  },
] as const;

const AboutGroupStructure = () => {
  const parent = groupStructure.find((parent) => parent.type === "parent");
  return (
    <section
      className="bg-[linear-gradient(180deg,var(--ink-2),var(--ink))] border-y border-line"
      data-screen-label="Group"
    >
      <div className="container-custom">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">02 · Our place in the group</div>
            <h2>
              Part of Default
              <br />
              Media Group.
            </h2>
          </div>
          <p className="meta">
            We&apos;re one of three sibling studios inside Default Media Group — each
            independent, but networked through a shared operating spine, shared
            AI tooling, and a shared address in Brentford.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 relative ">
          {parent && (
            <div className="border rounded-(--radius-brand) p-7 bg-ink flex flex-col gap-3 relative col-span-full items-center text-center bg-[linear-gradient(180deg,color-mix(in_oklch,var(--accent)_6%,var(--ink-2)),var(--ink))] border-[color-mix(in_oklch,var(--accent)_35%,var(--line))]">
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
                {parent.label}
              </span>
              <h3 className="text-[28px] font-serif ">{parent.name}</h3>
              <p className="text-cream-2 text-[14px] max-w-[50ch]">
                {parent.description}
              </p>
            </div>
          )}

          {groupStructure
            .filter((group) => group.type !== "parent")
            .map((sibling, key) => {
              return (
                <div
                  key={key}
                  className={`border  rounded-(--radius-brand) p-8 bg-ink flex flex-col gap-3 relative ${sibling.type === "self" ? "border-accent [background:linear-gradient(180deg,color-mix(in_oklch,var(--accent)_6%,var(--ink-2)),var(--ink))]" : "border-line"}`}
                >
                  <span
                    className={`font-mono text-[11px] tracking-[0.12em] uppercase ${sibling.type === "self" ? "text-accent" : "text-muted"}`}
                  >
                    {sibling.label}
                  </span>
                  <h3 className="text-[28px] font-serif">{sibling.name}</h3>
                  <p className="text-cream-2 text-[14px]">
                    {sibling.description}
                  </p>
                </div>
              );
            })}
        </div>

        <p className="lede mt-19 max-w-[70ch]">
          When a client engages Default Social, they get our studio on the front
          line — and the group&apos;s full operating depth standing behind it. One
          brief, one team, four houses&apos; worth of muscle.
        </p>
      </div>
    </section>
  );
};

export default AboutGroupStructure;
