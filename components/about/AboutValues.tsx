const AboutValues = () => {
  return (
    <section>
      <div className="container-custom">
        <div className="eyebrow mb-6">01 · Why we exist</div>

        <div className="max-w-[clamp(55ch,65vw,80ch)]">
          <p className="font-serif text-[clamp(28px,4vw,54px)] leading-[1.08] tracking-[-0.02em] text-cream m-0">
            We started Default Social because the agency model was built for a
            quieter market — and the market got{" "}
            <em className="italic text-accent">much louder.</em>
          </p>
        </div>

        <div className="mt-[clamp(32px,5vw,64px)] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 pt-8 md:pt-10">
          <div className="text-cream-2 leading-[1.62] text-[clamp(15px,1.4vw,16px)] space-y-4">
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted max-w-[82ch]">
              The old playbook broke when channels, tools and expectations all
              started moving at once.
            </div>
            <p>
              Slower briefs, longer cycles, fewer channels: that was the world
              the old playbook was written for. Today&apos;s brands need a
              partner who moves at the speed of the feed, but thinks at the
              depth of the boardroom — and most can&apos;t do both halves of the
              job at once.
            </p>

            <p>
              We sit inside the Default Media Group because the work we do —
              marketing, technology, creative, AI — is too entangled to be split
              across four agencies. We want one team you can call when you
              don&apos;t yet know if the answer is a campaign, a product, a
              content engine, or a strategy reset.
            </p>
          </div>
          <div className="relative border-y border-line py-6 md:py-8">
            <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-muted mb-4">
              What we&apos;re really after
            </span>

            <p className="font-serif text-[clamp(20px,4vw,42px)] leading-[1.12] tracking-[-0.015em] text-cream">
              Work that looks{" "}
              <em className="italic text-accent">obvious in hindsight</em> —
              where, a year later, you can&apos;t believe the brand ever did it
              any other way.
            </p>

            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-px w-20 bg-accent"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-px w-20 bg-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
