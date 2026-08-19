import RichTitle from "../ui/RichTitle";
import type { SectionIntro } from "@/types/shared";

type InsightsIntroProps = {
  intro: SectionIntro;
};

const InsightsIntro = ({ intro }: InsightsIntroProps) => {
  const { meta } = intro;

  return (
    <section data-screen-label="Insights intro">
      <div className="container-thin pt-16 md:pt-20">
        <div className="section-headings mb-0">
          <div className="section-title">
            <div className="eyebrow">Insights</div>

            <h2>Articles &amp; Case Studies.</h2>
          </div>

          <p className="meta text-[20px]">{meta}</p>
        </div>
      </div>
    </section>
  );
};

export default InsightsIntro;
