import type { ValuesSection } from "@/types/pages/aboutPage";
import RichTitle from "../ui/RichTitle";

type AboutValuesProps = {
  values: ValuesSection;
};

const AboutValues = ({ values }: AboutValuesProps) => {
  const { eyebrow, statement, intro, body, callout } = values;
  return (
    <section>
      <div className="container-custom">
        <div className="eyebrow mb-6">{eyebrow}</div>

        <div className="max-w-[clamp(55ch,65vw,80ch)]">
          <p className="heading-display text-[clamp(20px,4vw,40px)] leading-[1.08] tracking-[-0.02em] text-cream m-0">
            <RichTitle title={statement} />
          </p>
        </div>

        <div className="mt-[clamp(32px,5vw,64px)] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 pt-8 md:pt-10">
          <div className="text-cream-2 leading-[1.62] text-[clamp(15px,1.4vw,16px)] space-y-4">
            <div className=" text-[11px] tracking-[0.14em] uppercase text-muted max-w-[82ch]">
              {intro}
            </div>
            {body.map((para, key) => {
              return <p key={key}>{para}</p>;
            })}
          </div>
          <div className="relative border-y border-line py-6 md:py-8">
            <span className="block text-[10px] tracking-[0.16em] uppercase text-muted mb-4">
              {callout.eyebrow}
            </span>

            <p className="font-serif text-[clamp(20px,4vw,42px)] leading-[1.12] tracking-[-0.015em] text-cream">
              <RichTitle title={callout.statement} />
            </p>

            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-px w-20 bg-accent"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-px w-20 bg-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
