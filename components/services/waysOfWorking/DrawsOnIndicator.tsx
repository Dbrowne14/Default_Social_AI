import type { Service } from "@/types/collections/services";
import type { WaysOfWorkingModelContent } from "@/types/pages/servicesPage";

type DrawsOnIndicatorProps = {
  model: WaysOfWorkingModelContent;
  services: Service[];
  label: string;
  className?: string;
};

const DrawsOnIndicator = ({
  model,
  services,
  label,
  className = "",
}: DrawsOnIndicatorProps) => {
  const drawnIds = new Set(model.practices.map((practice) => practice.id));

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-muted">
        {label}
      </span>

      <ul className="flex items-center gap-1.5" aria-hidden="true">
        {services.map((service) => {
          const isActive = drawnIds.has(service.id);
          return (
            <li
              key={service.id}
              className={
                isActive
                  ? "size-2 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_oklch,var(--accent)_55%,transparent)]"
                  : "size-2 rounded-full border border-line"
              }
            />
          );
        })}
      </ul>

      <span className="sr-only">
        {model.title} draws on:{" "}
        {services
          .filter((service) => drawnIds.has(service.id))
          .map((service) => service.linkName)
          .join(", ")}
        .
      </span>
    </div>
  );
};

export default DrawsOnIndicator;
