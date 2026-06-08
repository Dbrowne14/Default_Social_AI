import React from "react";
import { servicesDetails } from "@/data/ServicesDetails";
import ServiceOffers from "./ServiceOffers";
import ServicesAi from "./ServicesAi";

const ServicesDetailed = () => {
  return (
    <section
      className="py-30 border-b border-line"
      id="web"
      data-screen-label="Web"
    >
      {servicesDetails.map((service, key) => {
        const { id, category, blurb, offers, aiCallout, process } = service;
        return (
          <div className="container-custom p-0">
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

            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.7fr] gap-10 md:gap-16  items-start">
              <div>
                <div className="eyebrow mb-4.5">What's in it</div>
                <div className="flex flex-col">
                  {offers.map((offer, key) => {
                    return (
                      <ServiceOffers
                        title={offer.title}
                        description={offer.description}
                        key={key}
                      />
                    );
                  })}
                </div>

                <ServicesAi
                  title={aiCallout.title}
                  description={aiCallout.description}
                />
              </div>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-[repeat(5,1fr)] gap-4">
              <div className="p-4.5 rounded-[10px] border border-line bg-ink flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.12em] text-accent">01</span>
                <h5 className="font-serif text-[18px] m-0">Listen</h5>
                <p className="text-cream-2 text-[13px] m-0">Audience &amp; signal sweep</p>
              </div>
              <div className="step">
                <span className="n">02</span>
                <h5 className="serif">Plan</h5>
                <p>Always-on rhythm + campaign IP</p>
              </div>
              <div className="step">
                <span className="n">03</span>
                <h5 className="serif">Create</h5>
                <p>Native production at pace</p>
              </div>
              <div className="step">
                <span className="n">04</span>
                <h5 className="serif">Publish</h5>
                <p>Platform-native, measured</p>
              </div>
              <div className="step">
                <span className="n">05</span>
                <h5 className="serif">Amplify</h5>
                <p>Paid where data says yes</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesDetailed;
