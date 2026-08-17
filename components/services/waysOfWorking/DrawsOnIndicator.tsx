import type { Service } from "@/types/collections/services";
import type { EngagementModel } from "@/types/waysOfWorking";

type DrawsOnIndicatorProps = {
  model: EngagementModel;
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
  const drawnServices = services.filter((service) =>
    model.drawsOn.includes(service.id),
  );

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-muted">
        {label}
      </span>

      <ul className="flex items-center gap-1.5" aria-hidden="true">
        {services.map((service) => {
          const isActive = model.drawsOn.includes(service.id);
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
        {model.title} draws on: {drawnServices.map((service) => service.linkName).join(", ")}.
      </span>
    </div>
  );
};

export default DrawsOnIndicator;
