import type { ServiceProcess } from "@/types";

const ServicesProcessStrip = ({ id, title, description }: ServiceProcess) => {
  return (
    <div className="p-4.5 rounded-[10px] border border-line bg-ink hidden md:flex flex-col gap-2">
      <span className="font-mono text-[11px] tracking-[0.12em] text-accent">
        {id}
      </span>
      <h5 className="font-serif text-[18px] m-0">{title}</h5>
      <p className="text-cream-2 text-[13px] m-0">{description}</p>
    </div>
  );
};

export default ServicesProcessStrip;
