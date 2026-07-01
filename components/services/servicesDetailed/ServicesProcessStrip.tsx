import type { ServiceProcessStep } from "@/types/services";

const ServicesProcessStrip = ({ id, title, description }: ServiceProcessStep) => {
  return (
    <div className="hidden md:flex flex-col gap-3 rounded-[10px] border border-line bg-ink p-4.5">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[11px] tracking-[0.12em] text-accent">
          {id}
        </span>
        <span className="text-accent-deep ">/</span>
        <h5 className="font-serif text-[18px] m-0 ">{title}</h5>
      </div>

      <p className="text-cream-2 text-[13px] leading-normal m-0">
        {description}
      </p>
    </div>
  );
};

export default ServicesProcessStrip;
