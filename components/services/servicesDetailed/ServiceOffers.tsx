import type { ServiceOffer } from "@/types/services";

const ServiceOffers = ({
  title,
  description,
}: ServiceOffer) => {
  return (
    <div className="grid grid-cols-[32px_1fr] gap-5 py-5 border-t border-line align-start">
      <span className="w-5.5 h-5.5 rounded-[50%] border border-accent flex items-center justify-center text-accent text-[12px] mt-0.75">
        ✓
      </span>
      <div>
        <h4 >{title}</h4>
        <p className="text-[clamp(12px,1.2vw,17px)]" >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceOffers;
