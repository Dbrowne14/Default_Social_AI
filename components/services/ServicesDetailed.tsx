import React from "react";
import { servicesDetails } from "@/data/ServicesDetails";
import ServiceOffers from "./ServiceOffers";

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

                <div className="mt-8 p-6 rounded-xl border [background:color-mix(in_oklch,var(--accent)_8%,var(--ink-2))] border-[color-mix(in_oklch,var(--accent)_30%,var(--line))] grid grid-cols-[56px_1fr] gap-4.5 items-start">
                  <div className="w-14 h-14 rounded-[50%] bg-accent text-ink flex items-center justify-center font-serif text-[28px]">
                    ⌁
                  </div>
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-accent mb-1.5">
                      AI Integration
                    </div>
                    <h4 className="font-serif text-[20px] leading-normal m-0">
                      A site that thinks at the edge.
                    </h4>
                    <p className="text-cream-2 text-[14px] mt-1.5 ">
                      We ship Next.js builds with an AI middleware layer for
                      personalisation, chat concierge, and intelligent routing —
                      all GDPR-clean, all observable, all swappable as models
                      evolve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-strip">
              <div className="step">
                <span className="n">01</span>
                <h5 className="serif">Listen</h5>
                <p>Audience &amp; signal sweep</p>
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
