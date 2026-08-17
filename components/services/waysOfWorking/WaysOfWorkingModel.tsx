import DrawsOnIndicator from "./DrawsOnIndicator";
import type { Service } from "@/types/collections/services";
import type { WaysOfWorkingModelContent } from "@/types/pages/servicesPage";

type WaysOfWorkingModelProps = {
  model: WaysOfWorkingModelContent;
  number: string;
  services: Service[];
  capabilitiesLabel: string;
  drawsOnLabel: string;
};

const WaysOfWorkingModel = ({
  model,
  number,
  services,
  capabilitiesLabel,
  drawsOnLabel,
}: WaysOfWorkingModelProps) => {
  return (
    <div
      className="
        border-t border-line py-10
        md:grid md:row-span-full md:grid-rows-subgrid
        md:border-l md:first:border-l-0
        md:py-12 md:px-10 md:first:pl-0 md:last:pr-0
      "
    >
      <div className=" text-accent text-[clamp(56px,11vw,132px)] leading-[0.85] tracking-[-0.02em]">
        {number}
      </div>

      <h3 className="heading-display text-cream text-[clamp(22px,2.6vw,34px)] mt-4 md:mt-5">
        {model.title}
      </h3>

      <p className="font-serif italic text-cream text-[clamp(18px,1.8vw,28px)] leading-[1.2] max-w-[24ch] mt-3 md:mt-4">
        {model.proposition}
      </p>

      <p className="text-cream-2 text-[14px] md:text-[18px] leading-[1.6] mt-5 md:mt-6">
        {model.description}
      </p>

      <div
        aria-hidden="true"
        className="border-t border-line mt-8 md:mt-10"
      />

      <div className="text-[10px] md:text-[14px] uppercase tracking-[0.22em] text-muted mt-6 md:mt-7">
        {capabilitiesLabel}
      </div>

      <p className="text-cream-2 text-[14px] md:text-[16px] leading-[1.7] mt-3">
        {model.capabilities.join(" · ")}
      </p>

      <DrawsOnIndicator
        model={model}
        services={services}
        label={drawsOnLabel}
        className="mt-8 md:mt-12 hidden md:flex"
      />
    </div>
  );
};

export default WaysOfWorkingModel;
