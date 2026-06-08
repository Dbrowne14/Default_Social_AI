import StickyToc from "@/components/services/StickyToc";

const Page = () => {
  return (
    <div data-screen-label="03 Services">
      <header className="pt-50 pb-20 border-b border-line">
        <div className="container-custom">
          <div className="eyebrow mb-9">Services</div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-20 items-end">
            <h1 className="font-serif text-[clamp(56px,9vw,140px)]">
              Five practices.
              <br />
              One <em className="text-accent italic">AI-native</em>
              <br />
              operating model.
            </h1>
            <div>
              <p className="lede">
                Each practice ships standalone work — or networks together as a
                programme. Underneath all of them: a shared spine of strategy,
                data and an AI layer built to evolve with the market.
              </p>
            </div>
          </div>
        </div>
      </header>

      <StickyToc />

      <section className="py-30 border-b border-line" id="web" data-screen-label="Web">
        <div className="container-custom p-0">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-7 md:gap-20 items-end mb-14">
            <div>
              <div className="font-serif text-[clamp(80px,12vw,180px)] leading-[0.85] text-accent tracking-[-0.04em]">01</div>
              <div className="eyebrow mt-4.5 ">Practice</div>
              <h2 className="font-serif mt-2.5 text-[clamp(40px,6vw,84px)]">Web Development</h2>
            </div>
            <p className="text-cream-2 text-[17px] leading-[1.55] max-w-[52ch] mt-5">
              Custom, scalable, AI-ready builds — engineered on Next.js and
              headless architecture. We treat the website as a product, not a
              brochure: shipped early, instrumented from day one, and built to
              absorb AI capability without a re-platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.9fr] gap-10 md:gap-16  items-start">
            <div>
              <div className="eyebrow mb-4.5">
                What's in it
              </div>
              <div className="flex flex-col">
                <div className="grid grid-cols-[32px_1fr] gap-5 py-5 border-t border-line align-start">
                  <span className="w-5.5 h-5.5 rounded-[50%] border border-accent flex items-center justify-center text-accent text-[12px] mt-0.75">✓</span>
                  <div>
                    <h4>Marketing &amp; brand sites</h4>
                    <p>
                      Editorial-grade marketing builds — design-led,
                      performance-tuned, conversion-shaped.
                    </p>
                  </div>
                </div>
                <div className="offer-row">
                  <span className="check">✓</span>
                  <div>
                    <h4>Product front-ends</h4>
                    <p>
                      Customer dashboards, portals and product surfaces — same
                      studio, same standards.
                    </p>
                  </div>
                </div>
                <div className="offer-row">
                  <span className="check">✓</span>
                  <div>
                    <h4>Headless CMS architecture</h4>
                    <p>
                      Sanity, Contentful or custom — content systems your
                      marketing team will actually use.
                    </p>
                  </div>
                </div>
                <div className="offer-row">
                  <span className="check">✓</span>
                  <div>
                    <h4>Performance &amp; Core Web Vitals</h4>
                    <p>
                      Sub-1s LCP, sub-100ms INP, schema-clean structure —
                      non-negotiable, not a phase 2.
                    </p>
                  </div>
                </div>
                <div className="offer-row">
                  <span className="check">✓</span>
                  <div>
                    <h4>AI-ready architecture</h4>
                    <p>
                      Modular API spine so chat, personalisation and content
                      engines plug in without re-builds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="ai-callout">
                <div className="icon">⌁</div>
                <div>
                  <div className="label">AI Integration</div>
                  <h4 className="serif">A site that thinks at the edge.</h4>
                  <p>
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
              <h5 className="serif">Discovery</h5>
              <p>Audit + stakeholder interviews</p>
            </div>
            <div className="step">
              <span className="n">02</span>
              <h5 className="serif">Architect</h5>
              <p>IA, content model, AI layer plan</p>
            </div>
            <div className="step">
              <span className="n">03</span>
              <h5 className="serif">Design</h5>
              <p>Design system + key flows</p>
            </div>
            <div className="step">
              <span className="n">04</span>
              <h5 className="serif">Build</h5>
              <p>Next.js + CMS + AI middleware</p>
            </div>
            <div className="step">
              <span className="n">05</span>
              <h5 className="serif">Launch</h5>
              <p>QA, perf, 90-day learning loop</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
