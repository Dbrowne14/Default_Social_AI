import type { ServiceOffer } from "@/types/services";

const ServicesAi = ({ title, description }: ServiceOffer) => {
  return (
    <div className="mt-8 p-5 md:p-6 rounded-xl border [background:color-mix(in_oklch,var(--accent)_8%,var(--ink-2))] border-[color-mix(in_oklch,var(--accent)_30%,var(--line))]">
      <div className="grid grid-cols-[48px_1fr] md:grid-cols-[56px_1fr] gap-4.5 items-stretch">
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 md:min-h-14 md:w-14 rounded-full bg-accent text-ink flex items-center justify-center font-serif text-[26px] md:text-[28px]">
            ⌁
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-accent mb-1.5">
            AI Integration
          </div>

          <h4 className="font-serif text-[20px] md:text-[22px] leading-[1.15] m-0">
            {title}
          </h4>
        </div>
      </div>

      <p className="text-cream-2 text-[14px] md:text-[15px] leading-[1.55] mt-4">
        {description}
      </p>
    </div>
  );
};

export default ServicesAi;
