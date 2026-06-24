export const approachData = [
  {
    id: "i",
    title: "Hypothesis-led",
    description:
      "Every engagement opens with a written hypothesis — what we believe will move the metric, and why. It's the document the strategist defends in week one, and the document we score against in week twelve.",
  },
  {
    id: "ii",
    title: "Modular AI from day one",
    description:
      "The AI layer is never bolted on at the end. It's chosen at brief — concierge, content engine, predictive scoring, personalisation — and wired into the architecture so each module can evolve independently.",
  },
  {
    id: "iii",
    title: "Shipping over showing",
    description:
      "We'd rather ship a small, real thing in week four than a perfect deck in week eight. The first thing that goes live is the spine — everything else iterates onto it.",
  },
  {
    id: "iv",
    title: "Senior on the work",
    description:
      "The senior team you meet in the pitch is the senior team that builds the thing. We don't hand off; the partner who scoped the engagement owns delivery to launch.",
  },
  {
    id: "v",
    title: "Compounding by default",
    description:
      "Every project leaves an asset behind — a design system, a content engine, a model, a measurement spine. The next project starts further down the curve than the last one ended.",
  },
];

function AboutApproach() {
  return (
    <section data-screen-label="Approach">
      <div className="container-custom">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">04 · Approach</div>
            <h2>
              An innovation
              <br />
              mindset, on rails.
            </h2>
          </div>

          <div className="relative w-fit max-w-[42ch] 720:py-5 720:border-y border-line">
            <p className="font-serif text-[clamp(20px,3vw,32px)] leading-[1.18]">
              <span className="italic text-accent">Innovation</span> is
              overused...
              <br />
              Here&apos;s what it actually means inside our studio.
            </p>

            <div
              aria-hidden="true"
              className="hidden 720:absolute top-0 right-0 h-px w-20 bg-accent"
            />
            <div
              aria-hidden="true"
              className="hidden 720:absolute bottom-0 left-0 h-px w-20 bg-accent"
            />
          </div>
        </div>

        <div className="flex flex-col">
          {approachData.map((approach) => {
            return (
              <div
                key={approach.id}
                className="border-t border-line py-6 md:py-8 flex flex-col gap-3 720:grid 720:grid-cols-[56px_0.8fr_1.5fr] 720:gap-8 720:items-start"
              >
                <div className="flex items-baseline gap-3 720:contents">
                  <span className="font-mono text-[11px] text-accent-deep tracking-[0.12em] uppercase 720:pt-1.5">
                    {approach.id}
                  </span>

                  <h3 className="font-serif text-[clamp(24px,6vw,32px)] leading-[1.1]">
                    {approach.title}
                  </h3>
                </div>

                <p className="text-cream-2 text-[15px] md:text-base leading-[1.6] max-w-[62ch] 720:max-w-none">
                  {approach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutApproach;
