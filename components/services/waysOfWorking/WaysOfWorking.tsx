import WaysOfWorkingModel from "./WaysOfWorkingModel";
import { waysOfWorkingContent } from "@/lib/content/waysOfWorking";
import type { ServicesProps } from "@/types/collections/services";

const WaysOfWorking = ({ services }: ServicesProps) => {
  const { eyebrow, headline, intro, capabilitiesLabel, drawsOnLabel, models } =
    waysOfWorkingContent;

  return (
    <section className="border-b border-line md:py-20" data-screen-label="Ways of working">
      <div className="container-custom ">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">{eyebrow}</div>

            <h2 className="heading-display text-cream text-[clamp(40px,6vw,90px)] leading-[0.9] max-w-[13ch]">
              {headline.line1}
              <br />
              {headline.line2Prefix}{" "}
              <span className="italic text-accent">
                {headline.line2Accent}
              </span>
              <br />
              {headline.line3}
            </h2>
          </div>

          <p className="meta">
            {intro.before}
            <span className="font-serif italic">{intro.accent}</span>
            {intro.after}
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-[repeat(8,auto)] mt-14 md:mt-10">
          {models.map((model) => (
            <WaysOfWorkingModel
              key={model.id}
              model={model}
              services={services}
              capabilitiesLabel={capabilitiesLabel}
              drawsOnLabel={drawsOnLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysOfWorking;
