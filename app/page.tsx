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
      {/*---Services Overview---*/}
      <section data-screen-label="Services">
        <div className="container-custom">
          <div className="section-headings">
            <div className="section-title">
              <div className="eyebrow">02 · Services</div>
              <h2>
                Five practices,
                <br />
                one operating model.
              </h2>
            </div>
            <p className="meta">
              Each practice is led by a senior partner and runs as an autonomous
              unit, networked through a shared AI and data layer. Engage them
              individually — or as a programme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-px bg-line border border-line rounded-(--radius) overflow-hidden">
            <article className="bg-ink p-10 flex flex-col gap-4.5 min-h-80 relative transition-[background] duration-250 ease-in-out hover:bg-ink-2 group">
              <div className="absolute top-10 right-10 w-9 h-9 rounded-[50%] border border-line flex items-center justify-center text-cream-2 transition-[border-color,color,transform] duration-250 ease-in-out group-hover:border-accent group-hover:text-accent group-hover:-rotate-45">↗</div>
              <div className="num">01 / Web Development</div>
              <h3 className="serif">
                Custom, scalable
                <br />
                AI-ready builds.
              </h3>
              <p className="desc">
                Performance-optimised marketing sites and product front-ends —
                engineered on Next.js, headless CMS and modular AI APIs.
              </p>
              <div className="tags">
                <span className="pill">Next.js</span>
                <span className="pill">Headless CMS</span>
                <span className="pill ai">AI-ready</span>
              </div>
            </article>

            <article className="svc">
              <div className="arr">↗</div>
              <div className="num">02 / SEO &amp; Organic Growth</div>
              <h3 className="serif">
                Search that compounds
                <br />
                over time.
              </h3>
              <p className="desc">
                Technical foundations, content strategy and AI-assisted insight
                — built to grow assets that earn, not rent.
              </p>
              <div className="tags">
                <span className="pill">Technical SEO</span>
                <span className="pill">Content systems</span>
                <span className="pill ai">AI insights</span>
              </div>
            </article>

            <article className="svc">
              <div className="arr">↗</div>
              <div className="num">03 / Social &amp; Viral Campaigns</div>
              <h3 className="serif">
                Platform-native ideas
                <br />
                that travel.
              </h3>
              <p className="desc">
                From always-on social systems to viral-first campaign IP —
                informed by signal, not vibes.
              </p>
              <div className="tags">
                <span className="pill">Always-on</span>
                <span className="pill">Campaign IP</span>
                <span className="pill ai">Audience AI</span>
              </div>
            </article>

            <article className="svc">
              <div className="arr">↗</div>
              <div className="num">04 / Social-First Creative</div>
              <h3 className="serif">
                Brand storytelling
                <br />
                built for the feed.
              </h3>
              <p className="desc">
                Short-form, motion and static content — directed by craft,
                sharpened by performance data.
              </p>
              <div className="tags">
                <span className="pill">Short-form</span>
                <span className="pill">Motion</span>
                <span className="pill">Creative direction</span>
              </div>
            </article>

            <article className="svc grid-cols-full">
              <div className="arr">↗</div>
              <div className="num">05 / Marketing Strategy</div>
              <h3 className="serif">
                Integrated planning, executed with AI-grade discipline.
              </h3>
              <p className="desc max-w-[60ch]">
                Data-driven planning, audience architecture, channel mix and
                forecasting — supported by predictive AI tooling so the plan
                flexes with the market, not against it.
              </p>
              <div className="tags">
                <span className="pill">Strategy sprints</span>
                <span className="pill">Forecasting</span>
                <span className="pill">Channel mix</span>
                <span className="pill ai">Predictive AI</span>
              </div>
            </article>
          </div>

          <div className="mt-8 flex justify-end">
            <a href="services-v0.html" className="btn ghost">
              Explore all services <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
