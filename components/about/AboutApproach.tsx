import type { ApproachSection } from "@/types/pages/aboutPage";
import RichTitle from "../ui/RichTitle";
type AboutApproachProps = {
  approach: ApproachSection;
};

export const AboutApproach = ({ approach }: AboutApproachProps) => {
  const { eyebrow, title, statement, principles } = approach;
  return (
    <section data-screen-label="Approach">
      <div className="container-custom">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">{eyebrow}</div>
            <h2>
              <RichTitle title={title} />
            </h2>
          </div>

          <div className="relative w-fit max-w-[42ch] 720:py-5 720:border-y border-line">
            <p className="font-serif text-[clamp(20px,3vw,32px)] leading-[1.18]">
              <RichTitle title={statement} />
            </p>

            <div
              aria-hidden="true"
              className="hidden 720:absolute top-0 right-0 h-px w-20 bg-accent"
            />
            <div
              aria-hidden="true"
              className="hidden 720:absolute bottom-0 left-0 h-px w-20 bg-accent"
            />
          </div>
        </div>

        <div className="flex flex-col">
          {principles.map((approach) => {
            return (
              <div
                key={approach.id}
                className="border-t border-line py-6 md:py-8 flex flex-col gap-3 720:grid 720:grid-cols-[56px_0.8fr_1.5fr] 720:gap-8 720:items-start"
              >
                <div className="flex items-baseline gap-3 720:contents">
                  <span className="font-dmSans font-medium tracking-[0.18em] text-[13px] text-accent-deep uppercase 720:pt-1.5">
                    {approach.id}
                  </span>

                  <h3 className="heading-display text-accent-deep text-[clamp(20px,6vw,24px)] leading-[1.1]">
                    {approach.title}
                  </h3>
                </div>

                <p className="text-cream-2 text-[15px] md:text-base leading-[1.6] max-w-[62ch] 720:max-w-none">
                  {approach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;
