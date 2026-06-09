
const AboutValues = () => {
  return (
    <section>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-20 items-start">
          <div className="eyebrow">01 · Why we exist</div>
          <div>
            <h2 className="font-serif text-[clamp(36px,5vw,64px)]">
              We started Default Social because the agency model was built for a
              quieter market — slower briefs, longer cycles, fewer channels.
              Today's brands need a partner who moves at the speed of the feed,
              but thinks at the depth of the boardroom.
            </h2>
            <div className="mt-8 space-y-4.5 text-cream-2 text-[17px] leading-[1.55]">
              <p>
                We sit inside the Default Media Group because the work we do —
                marketing, technology, creative, AI — is too entangled to be
                split across four agencies. We want one team you can call when
                you don't yet know if the answer is a campaign, a product, a
                content engine, or a strategy reset.
              </p>
              <p>
                Most of all, we want to do work that looks{" "}
                <em className="italic text-accent">obvious in hindsight</em> —
                the kind of solution where a year later you can't believe the
                brand ever did it any other way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
