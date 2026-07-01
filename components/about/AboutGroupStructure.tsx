import type { GroupStructureSection } from "@/types/aboutPage";
import RichTitle from "../ui/RichTitle";

type AboutGroupStructureProps = {
  groupStructure: GroupStructureSection;
};

const AboutGroupStructure = ({ groupStructure }: AboutGroupStructureProps) => {
  const { eyebrow, entries, title, meta, closingStatement } = groupStructure;
  const parent = entries.find((parent) => parent.type === "parent");
  return (
    <section
      className="bg-[linear-gradient(180deg,var(--ink-2),var(--ink))] md:border-b md:border-line"
      data-screen-label="Group"
    >
      <div className="container-custom">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">{eyebrow}</div>
            <h2>
              <RichTitle title={title} />
            </h2>
          </div>
          <p className="meta">{meta}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 relative">
          {parent && (
            <div className="border rounded-(--radius-brand) p-6 md:p-7 bg-ink flex flex-col gap-3 relative col-span-full md:items-center md:text-center bg-[linear-gradient(180deg,color-mix(in_oklch,var(--accent)_6%,var(--ink-2)),var(--ink))] border-[color-mix(in_oklch,var(--accent)_35%,var(--line))]">
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-muted">
                {parent.label}
              </span>

              <h3 className="text-[clamp(24px,5vw,28px)] font-serif">
                {parent.name}
              </h3>

              <p className="text-cream-2 text-[14px] leading-[1.55] max-w-[50ch]">
                {parent.description}
              </p>
            </div>
          )}

          {entries
            .filter((group) => group.type !== "parent")
            .map((sibling, key) => (
              <div
                key={key}
                className={`
                  border rounded-(--radius-brand)
                  p-6 md:p-8
                  bg-ink
                  flex flex-col gap-3
                  relative
                  md:min-h-65
                  ${
                    sibling.type === "self"
                      ? "border-accent [background:linear-gradient(180deg,color-mix(in_oklch,var(--accent)_6%,var(--ink-2)),var(--ink))]"
                      : "border-line"
                  }
                `}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`font-mono text-[10px] md:text-[11px] tracking-[0.12em] uppercase ${
                      sibling.type === "self" ? "text-accent" : "text-muted"
                    }`}
                  >
                    {sibling.label}
                  </span>

                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted md:hidden">
                    0{key + 1}
                  </span>
                </div>

                <h3 className="text-[clamp(24px,5vw,28px)] font-serif">
                  {sibling.name}
                </h3>

                <p className="text-cream-2 text-[14px] leading-[1.55]">
                  {sibling.description}
                </p>
              </div>
            ))}
        </div>

        <p className="lede mt-19 max-w-[70ch]">{closingStatement}</p>
      </div>
    </section>
  );
};

export default AboutGroupStructure;
