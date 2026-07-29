import { getAllServices } from "@/lib/content/collections/services";
import type { Service } from "@/types/collections/services";
import Link from "next/link";
import Arrow from "@/components/ui/Arrow";

const ServicesBuckets = async () => {
  const services = await getAllServices();
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-(--radius) border border-line bg-line md:grid-cols-2">
      {services.map((service: Service) => (
        <Link
          key={service.id}
          href={`/services#${service.linkName}`}
          className={`
        block h-full
        ${service.featured ? "md:col-span-full" : ""}
      `}
        >
          <article
            className={` group relative flex h-full min-h-70 flex-col overflow-hidden bg-ink p-6 transition-all duration-300 ease-out hover:bg-ink-2 sm:p-8 md:p-10
            ${service.featured ? "min-h-85" : ""}`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="arr absolute right-5 top-5">
              <Arrow />
            </div>

            <div className="mb-5 pr-12 font-dmSans text-[11px] uppercase tracking-[0.3em] text-muted">
              {service.id} / {service.category}
            </div>

            <h3
              className="
            relative z-10 text-balance
            font-poppins text-[clamp(34px,8vw,52px)]
            font-semibold leading-[0.95] tracking-[-0.04em]
            md:text-[clamp(36px,3.4vw,48px)]
          "
            >
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
                    key={`${service.id}-${tag.label}-${index}`}
                    className={`flex text-[11px] sm:text-xs ${
                      tag.ai ? "pill-ai" : "pill"
                    }`}
                  >
                    {tag.ai && <span className="dot-green" />}
                    {tag.label}
                  </span>
                ),
              )}
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default ServicesBuckets;
