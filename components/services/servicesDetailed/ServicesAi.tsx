import type { ServiceOffers } from "@/types";

const ServicesAi = ({ title, description }: ServiceOffers) => {
  return (
    <div className="mt-8 p-6 rounded-xl border [background:color-mix(in_oklch,var(--accent)_8%,var(--ink-2))] border-[color-mix(in_oklch,var(--accent)_30%,var(--line))] grid grid-cols-[56px_1fr] gap-4.5 items-start">
      <div className="w-14 h-14 rounded-[50%] bg-accent text-ink flex items-center justify-center font-serif text-[28px]">
        ⌁
      </div>
      <div>
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-accent mb-1.5">
          AI Integration
        </div>
        <h4 className="font-serif text-[20px] leading-normal m-0">{title}</h4>
        <p className="text-cream-2 text-[14px] mt-1.5 ">{description}</p>
      </div>
    </div>
  );
};

export default ServicesAi;
