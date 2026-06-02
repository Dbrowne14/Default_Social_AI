import MarqueeTrack from "@/components/layout/ui/MarqueeTrack";
import DummyClientData from "@/components/layout/ui/DummyClientData";
import ServicesBuckets from "@/components/layout/ui/ServicesBuckets";
import TeamBio from "@/components/layout/ui/TeamBio";
import { team } from "@/data/teamData";

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
        <div className="container-custom py-20">
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

          <ServicesBuckets />

          <div className="mt-8 flex justify-end">
            <a
              href="/services"
              className="btn bg-transparent text-cream border border-line hover:border-accent hover:text-accent"
            >
              Explore all services{" "}
              <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent text-[10px] leading-none">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
      {/*---About---*/}
      <section data-screen-label="About">
        <div className="container-custom">
          <div className="section-headings">
            <div className="section-title">
              <div className="eyebrow">03 · About</div>
              <h2>
                A studio between
                <br />
                signal and craft.
              </h2>
            </div>
            <p className="meta">
              The digital, social &amp; technology arm of the Default Media
              Group — a ten-year-old company with one studio in Brentford, one
              foot in the data, and both eyes on what's next.{" "}
              <a href="/about" className="text-accent hover:underline">
                More about the studio →
              </a>
            </p>
          </div>

          <div className="flex items-baseline gap-6 flex-wrap mb-8 mt-2">
            <span className="text-mono text-[11px] tracking-[0.12em] uppercase text-accent whitespace-nowrap">
              Key people
            </span>
            <p className="text-cream-2 text-[15px] max-w=[52ch]">
              Senior partners on the work — the team you meet in the pitch is
              the team that ships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 xs520:grid-cols-2 gap-8">
            {team.map((person, index) => {
              return (
                <TeamBio
                  key={index}
                  initials={person.initials}
                  name={person.name}
                  role={person.role}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/*---Insights Overview---*/}
      <section className="border-t border-t-line" data-screen-label="Insights">
        <div className="container-custom py-20">
          <div className="section-headings">
            <div className="section-title">
              <div className="eyebrow">04 · Insights</div>
              <h2>
                Field notes from
                <br />
                the practice.
              </h2>
            </div>
            <p className="meta">
              Long-form thinking on agency operating models, what we've shipped
              recently, and what's coming next. {"  "}
              <a href="/insights" className="text-accent hover:underline">
                 All insights →
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="flex flex-col gap-4 pt-6 border-t border-line">
              <div className="aspect-4/3 rounded-[10px] border border-line relative overflow-hidden bg-[repeating-linear-gradient(135deg,var(--ink-2)_0_12px,var(--ink-3)_12px_24px)]">
                <span className="pill absolute top-3 left-3 bg-ink border border-line">SEO</span>
              </div>
              <div className="meta flex gap-3 font-mono text-[11px] tracking-widest uppercase text-muted">
                April 2026 · 6 min read
              </div>
              <h3 className="font-serif text-[26px]">
                Topic clusters in the age of answer engines.
              </h3>
              <p className="text-cream-2 text-[15px]">
                How we restructure content systems for sites that need to be
                both Google-friendly and LLM-citable.
              </p>
              <a
                className="font-mono text-accent"
                href="/insights/seo-topic-clusters"
              >
                Read article →
              </a>
            </article>
            <article className="insight">
              <div className="thumb">
                <span className="pill tag bg-ink border border-line">
                  Social
                </span>
              </div>
              <div className="meta">April 2026 · 4 min read</div>
              <h3 className="serif">
                Anatomy of a campaign that travelled 14 million times.
              </h3>
              <p>
                A short forensic on a recent platform-native idea: the brief,
                the spike, and the long tail.
              </p>
              <a
                className="font-mono text-accent"
                href="/insights/anatomy-of-a-campaign-that-travelled-14-million-times"
              >
                Read article →
              </a>
            </article>
            <article className="insight">
              <div className="thumb">
                <span className="pill tag bg-ink border border-line">Web</span>
              </div>
              <div className="meta">March 2026 · 7 min read</div>
              <h3 className="serif">
                Why we ship Next.js with a modular middleware layer.
              </h3>
              <p>
                A look at our default stack — and the patterns that have made
                the biggest difference for clients.
              </p>
              <a
                className="font-mono text-accent"
                href="/insights/why-we-ship-nextjs-with-a-modular-middleware-layer"
              >
                Read article →
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
