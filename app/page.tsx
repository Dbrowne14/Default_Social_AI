import MarqueeTrack from "@/components/layout/ui/MarqueeTrack";
import DummyClientData from "@/components/layout/ui/DummyClientData";

export default function Home() {
  return (
    <div>
      /*---complete later---*/
      <section id="hero" className="min-h-screen"></section>
      {/* Marquee Track */}
      <div
        className="border-y border-line bg-ink py-5.5 overflow-hidden"
        id="Marquee Ticker"
      >
        <div className="flex whitespace-nowrap overflow-hidden mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex items-center animate-marquee [animation-duration:40s]">
            {/* Track 1 */}
            <MarqueeTrack />
            {/* Track 2 */}
            <MarqueeTrack />
          </div>
        </div>
      </div>
      <section className="py-35" data-screen-label="Value prop">
        <div className="container-custom">
          <div className="max-w-190">
            <div className="eyebrow mb-7">01 · The proposition</div>
            <p className="font-serif text-[clamp(38px,4.6vw,64px)] leading-[1.1] max-w-[18ch] tracking-[-0.01em]">
              A digital, social and technology studio for brands that want to{" "}
              <em className="italic text-accent">set the standard</em> — not
              chase it.
            </p>
            <p className="lede mt-9 max-w-[58ch] text-cream-2 text-4.5 leading-[1.55]">
              Default Social is the digital, social and technology arm of the
              Default Media Group. We work with brands solving complex growth
              and brand challenges, where the answer sits somewhere between
              creative, code and signal.
            </p>
          </div>
        </div>
      </section>
      {/*---Client Logos---*/}
      <section
        className="py-15 border-y border-y-line"
        data-screen-label="Clients"
      >
        <div className="container-custom">
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-7">
            Selected clients · 2023 — {new Date().getFullYear()}
          </div>
          <div className="flex whitespace-nowrap mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"> 
            <div className="flex items-center w-max will-change-transform animate-marquee [animation-duration:40s]">
              <DummyClientData />
              <DummyClientData />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
