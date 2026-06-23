import { servicesDetails } from "@/data/ServicesDetails";
import ServiceOffers from "./ServiceOffers";
import ServicesAi from "./ServicesAi";
import ServicesProcessStrip from "./ServicesProcessStrip";

const ServicesDetailed = () => {
  return (
    <section className="border-b border-line" id="web" data-screen-label="Web">
      {servicesDetails.map((service) => {
        const { id, category, blurb, offers, aiCallout, process } = service;
        return (
          <div className="container-custom" key={service.id}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-7 md:gap-20 items-end mb-14">
              <div>
                <div className="font-serif text-[clamp(80px,12vw,180px)] leading-[0.85] text-accent tracking-[-0.04em]">
                  {id}
                </div>
                <div className="eyebrow mt-4.5 ">Practice</div>
                <h2 className="font-serif mt-2.5 text-[clamp(40px,6vw,84px)]">
                  {category}
                </h2>
              </div>
              <p className="text-cream-2 text-[17px] leading-[1.55] max-w-[52ch] mt-5">
                {blurb}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-16 items-start">
              <div>
                <div className="eyebrow mb-4.5">What's included</div>

                <div className="flex flex-col">
                  {offers.map((offer, key) => (
                    <ServiceOffers
                      title={offer.title}
                      description={offer.description}
                      key={key}
                    />
                  ))}
                </div>

                <ServicesAi
                  title={aiCallout.title}
                  description={aiCallout.description}
                />
              </div>

              <aside className="hidden md:flex flex-col md:sticky md:top-24">
                <div className="eyebrow mb-4.5">Process</div>

                <div className="flex flex-col gap-3">
                  {process.map((p, key) => (
                    <ServicesProcessStrip
                      id={p.id}
                      title={p.title}
                      description={p.description}
                      key={key}
                    />
                  ))}
                </div>
              </aside>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesDetailed;
