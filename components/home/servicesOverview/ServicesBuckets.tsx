import { getAllServices } from "@/lib/content/collections/services";
import type { Service } from "@/types/collections/services";

const ServicesBuckets = async () => {
  const services = await getAllServices();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-(--radius) overflow-hidden">
      {services.map((service: Service) => (
        <article
          key={service.id}
          className={`
        group relative flex min-h-70 flex-col overflow-hidden
        bg-ink p-6 sm:p-8 md:p-10
        transition-all duration-300 ease-out
        hover:bg-ink-2
        ${service.featured ? "md:col-span-full min-h-85" : ""}
      `}
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)] dutation-300" />

          <div className="arr absolute right-5 top-5">↗</div>

          <div className="mb-5 pr-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {service.id} / {service.category}
          </div>

          <h3 className="relative z-10 font-serif text-[clamp(34px,10vw,52px)] leading-[0.9] tracking-[-0.03em] md:text-[clamp(36px,3.4vw,48px)]">
            {service.title[0]}
            <br />
            <span className="text-cream-2">{service.title[1]}</span>
          </h3>

          <p
            className={`
          relative z-10 mt-5 text-[15px] leading-7 text-cream-2 sm:text-base
          ${service.featured ? "max-w-[64ch]" : "max-w-[42ch]"}
        `}
          >
            {service.description}
          </p>

          <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-8">
            {service.tags.map(
              (tag: { label: string; ai?: boolean }, index: number) => (
                <span
                  key={index}
                  className={`flex text-[11px] sm:text-xs ${tag.ai ? "pill-ai" : "pill"}`}
                >
                  {tag.ai && <span className="dot" />}
                  {tag.label}
                </span>
              ),
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ServicesBuckets;
