import type { ServiceOffers } from "@/types";

const ServiceOffers = ({
  title,
  description,
}: ServiceOffers) => {
  return (
    <div className="grid grid-cols-[32px_1fr] gap-5 py-5 border-t border-line align-start">
      <span className="w-5.5 h-5.5 rounded-[50%] border border-accent flex items-center justify-center text-accent text-[12px] mt-0.75">
        ✓
      </span>
      <div>
        <h4 >{title}</h4>
        <p >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceOffers;
