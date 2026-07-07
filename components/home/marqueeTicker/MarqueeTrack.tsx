import { getServiceTickerItems } from "@/lib/content/collections/services";

const MarqueeTrack = async () => {
  const services = await getServiceTickerItems();
  return (
    <div className="flex gap-12 items-center shrink-0 pr-12">
      {services.map((service, index) => (
        <span
          key={`first-${index}`}
          className={`font-serif text-[clamp(32px,4.5vw,64px)] text-cream inline-flex items-center gap-12 ${
            index % 2 === 0 ? "" : "italic"
          }`}
        >
          {service.label}
          <span className="w-2 h-2 rounded-full bg-accent"></span>
        </span>
      ))}
    </div>
  );
};

export default MarqueeTrack;
