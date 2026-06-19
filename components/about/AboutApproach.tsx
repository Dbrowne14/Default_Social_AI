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
          <p className="meta">
            &ldquo;Innovation is overused. Here&apos;s what it actually means inside our
            studio. &rdquo;
          </p>
        </div>

        <div className="flex flex-col">
          {approachData.map((approach) => {
            return (
              <div
                key={approach.id}
                className="grid grid-cols-1 720:grid-cols-[60px_1fr_1.5fr] gap-8 items-start py-8 border-t border-line"
              >
                <span className="font-mono text-[11px] text-accent-deep tracking-[0.12em]  pt-1.5">
                  {approach.id}
                </span>
                <h3 className="font-serif text-[clamp(22px,2.4vw,32px)]">
                  {approach.title}
                </h3>
                <p className="text-cream-2">{approach.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutApproach;
