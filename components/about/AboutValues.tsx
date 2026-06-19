const AboutValues = () => {
  return (
    <section>
      <div className="container-custom">
        <div className="eyebrow mb-6">01 · Why we exist</div>
        <p className="font-serif text-[clamp(24px,3.4vw,38px)] leading-[1.18] tracking-[-0.012em] text-cream md:max-w-[30ch] m-0">
          We started Default Social because the agency model was built for a
          quieter market — and the market got <em className="italic text-accent">much louder.</em>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-[clamp(32px,4vw,56px)] mt-[clamp(32px,4vw,48px)] items-start">
          <div className="text-cream-2 leading-[1.62] text-[clamp(15px,1.4vw,16px)] space-y-4">
            <p>
              Slower briefs, longer cycles, fewer channels: that was the world
              the old playbook was written for. Today&apos;s brands need a partner
              who moves at the speed of the feed, but thinks at the depth of the
              boardroom — and most can&apos;t do both halves of the job at once.
            </p>
            <p>
              We sit inside the Default Media Group because the work we do —
              marketing, technology, creative, AI — is too entangled to be split
              across four agencies. We want one team you can call when you don&apos;t
              yet know if the answer is a campaign, a product, a content engine,
              or a strategy reset.
            </p>
          </div>
          <div className=" border-accent border-t-2 pt-5.5 font-serif text-[clamp(22px,2.6vw,30px)] leading-[1.22] text-cream">
            <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-muted mb-3.5">What we&apos;re really after</span>
            Work that looks <em className="italic text-accent">obvious in hindsight</em> — where, a year later,
            you can&apos;t believe the brand ever did it any other way.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
