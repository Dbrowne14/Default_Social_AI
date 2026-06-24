import PageHeader from "../ui/PageHeader";
import { companyInfo } from "@/data/companInfo";

const AboutHeader = () => {
  return (
    <PageHeader
      eyebrow="About"
      title={
        <>
          A studio
          <br />
          between
          <br />
          <em className="text-accent italic">signal</em>
          <br />
          and craft.
        </>
      }
    >
      {" "}
      <div>
        <p className="lede hidden xl:block">
          Default Social is the digital, social and technology arm of the
          Default Media Group — a 10-year-old company with one studio in
          Brentford, one foot in the data, and both eyes on what&apos;s next.
        </p>
        <div className="flex flex-col gap-3 font-mono text-[11px] tracking-[0.08em] uppercase mt-10">
          {companyInfo.map((info, key) => {
            return (
              <div
                className="flex justify-between md:gap-6 py-1 md:py-3.5 border-b border-line"
                key={key}
              >
                <span className="text-muted text-[clamp(10px,1vw,11px)]">
                  {info.label}
                </span>
                <span className="text-cream text-right text-[clamp(9px,1vw,11px)]">
                  {info.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </PageHeader>
  );
};

export default AboutHeader;
