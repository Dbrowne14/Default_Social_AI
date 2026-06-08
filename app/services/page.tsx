const Page = () => {
  return (
    <div data-screen-label="03 Services">
      <header className="pt-50 pb-20">
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

      <aside className="sticky top-21.5 flex flex-wrap gap-2 py-4 bg-[color-mix(in_oklch,var(--ink)_80%,transparent)] backdrop-blue-[16px] z-30 border-b border-line">
        <nav aria-label="Table of contents" className="flex gap-2 flex-wrap container-custom">
          <a href="#web" className="py-2 px-3.5 rounded-[999px] border border-line font-mono text-[11px] tracking-widest uppercase text-cream-2 transition-colors duration-150 ease-in-out hover:text-accent hover:border-accent ">01 / Web Development</a>
          <a href="#seo">02 / SEO & Organic</a>
          <a href="#social">03 / Social & Viral</a>
          <a href="#creative">04 / Social-First Creative</a>
          <a href="#strategy">05 / Marketing Strategy</a>
        </nav>
      </aside>
    </div>
  );
};

export default Page;
