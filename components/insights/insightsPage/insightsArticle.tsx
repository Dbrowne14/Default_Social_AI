import React from "react";

const insightsArticle = () => {
  return (
    <>
      <header className="pt-nav min-h-screen flex items-center" data-screen-label="Article header">
        <div className="container-custom">
          <nav className="flex items-center gap 2.5 font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-10" aria-label="Breadcrumb">
            <a href="/insights" className="text-muted transition-colors duration-150 ease-in-out hover:text-accent">Insights</a>
            <span className="opacity-[0.5]">/</span>
            <a href="/insights" className="text-muted transition-colors duration-150 ease-in-out hover:text-accent">AI Practice</a>
            <span className="opacity-[0.5]">/</span>
            <span className="text-cream-2">The AI concierge</span>
          </nav>

          <div className="max-w-245">
            <div className="flex items-center flex-wrap text-[11px] gap-3.5 font-mono tracking-[0.12em] uppercase text-muted mb-7">
              <span className="pill-ai">AI Practice</span>
              <span className="font-mono text-muted" >
                Essay · 12 min read
              </span>
              <span className="font-mono text-muted">
                14 May 2026
              </span>
            </div>
            <h1 className="font-serif text-[clamp(40px,6.4vw,88px)] leading-none tracking-[-0.02em] max-w-[16ch]">
              The AI concierge isn't a chatbot. It's a <em className="text-accent">sales engineer.</em>
            </h1>
            <p className="font-serif text-[clamp(21px,2.1vw,30px)] leading-[1.4] text-cream-2 max-w-[46ch] mt-8">
              Most "AI on the website" projects fail because they treat the
              model as a feature in the corner. The teams that win treat it as a
              role — and roles have responsibilities, judgement, and a moment to
              step back.
            </p>
          </div>

          <div className="flex items-center gap-7 flex-wrap mt-11 py-6 border-y border-line">
            <div className="flex items-center gap-3.5">
              <div className="w-11.5 h-11.5 rounded-[50%] bg-accent text-on-accent font-serif text-[24px] flex items-center justify-center shrink-0">R</div>
              <div className="flex flex-col gap-0.75 ">
                <span className="font-sans font-semibold text-[15px] text-cream">Robin McGlashan</span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted">Founder · Default Media Group</span>
              </div>
            </div>
            <div className="flex flex-col gap-0.75">
              <span className="font-sans font-semibold text-[15px] text-cream">Four layers</span>
              <span className="font-mono text-[10px]">The pattern</span>
            </div>
            <div className="stat">
              <span className="v">2,940 words</span>
              <span className="l">Long-form</span>
            </div>
            <div className="share" aria-label="Share">
              <a href="#" aria-label="Share on LinkedIn">
                in
              </a>
              <a href="#" aria-label="Copy link">
                ↗
              </a>
            </div>
          </div>

          <figure className="cover-figure">
            <div className="cover">
              <span className="glyph">⌁</span>
              <span className="ph">cover image · commissioned illustration</span>
            </div>
            <figcaption>
              The concierge sits between the brief and the buyer — closer to a
              sales engineer than a help widget.
            </figcaption>
          </figure>
        </div>
      </header>
    </>
  );
};

export default insightsArticle;
