import PageHeader from "../ui/PageHeader";
import { companyInfo } from "@/data/companyInfo";
import type { AboutPageHeader } from "@/types/aboutPage";


const AboutHeader = ({aboutHeader}:AboutPageHeader) => {
  const {eyebrow, title, lede} = aboutHeader;
  return (
    <PageHeader
      eyebrow={eyebrow}
      title={title}
    >
      {" "}
      <div>
        <p className="lede hidden xl:block">
         {lede}
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
