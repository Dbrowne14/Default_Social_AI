import WaysOfWorkingModel from "./WaysOfWorkingModel";
import RichTitle from "@/components/ui/RichTitle";
import type { Service } from "@/types/collections/services";
import type { WaysOfWorkingSection } from "@/types/pages/servicesPage";

const CAPABILITIES_LABEL = "Capabilities can include";
const DRAWS_ON_LABEL = "Draws on";

type WaysOfWorkingProps = {
  waysOfWorking: WaysOfWorkingSection;
  services: Service[];
};

const WaysOfWorking = ({ waysOfWorking, services }: WaysOfWorkingProps) => {
  const { eyebrow, title, intro, models } = waysOfWorking;

  return (
    <section className="border-b border-line min-h-dvh md:py-20" data-screen-label="Ways of working">
      <div className="container-custom ">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">{eyebrow}</div>

            <h2 className="heading-display text-cream text-[clamp(40px,6vw,90px)] leading-[0.9] max-w-[13ch]">
              <RichTitle title={title} />
            </h2>
          </div>

          <p className="meta">
            <RichTitle title={intro} />
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-[repeat(8,auto)] mt-14 md:mt-10">
          {models.map((model, index) => (
            <WaysOfWorkingModel
              key={model.title}
              model={model}
              number={String(index + 1).padStart(2, "0")}
              services={services}
              capabilitiesLabel={CAPABILITIES_LABEL}
              drawsOnLabel={DRAWS_ON_LABEL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysOfWorking;
