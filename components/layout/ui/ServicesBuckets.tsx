import { servicesDetails, serviceType } from "../../../data/ServicesDetails";

const ServicesBuckets = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-px bg-line border border-line rounded-(--radius) overflow-hidden">
      {servicesDetails.map((service: serviceType) => (
        <article className={`bg-ink p-10 flex flex-col gap-4.5 min-h-80 relative transition-[background] duration-250 ease-in-out hover:bg-ink-2 group ${service.featured ? "col-span-full" : ""}`} key={service.id} >
          <div className="arr">↗</div>
          <div className="font-mono text-[12px] tracking-widest text-muted ">
            {service.id} / {service.category}
          </div>
          <h3 className="font-serif text-[clamp(28px,3.4vw,42px)]">
            {service.title[0]}
            <br />
            {service.title[1]}
          </h3>
          <p className={`text-cream-2 ${service.featured ? "max-w-[60ch]" : "max-w-[42ch]"} `}>
         {service.description}
          </p>
          <div className="flex gap-2 flex-wrap mt-auto">
            {service.tags.map((tag: { label: string; ai?: boolean }, index: number) => (
              <span
                key={index}
                className={`pill ${tag.ai ? "ai" : ""}`}
              >
                {" "}
                {tag.ai && <span className="dot" />}
                {tag.label}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ServicesBuckets;
