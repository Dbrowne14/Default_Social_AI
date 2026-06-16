const InsightsArticleRelated = () => {
  return (
    <section data-screen-label="Related reading">
      <div className="container-custom">
        <div className="section-headings mb-6">
          <div className="section-title">
            <div className="eyebrow">Keep reading</div>
            <h2>Related field notes.</h2>
          </div>
          <p className="meta">
            More from the AI practice — the patterns behind the concierge, and
            where the value actually sits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-6 min-[600]:grid-cols-2 min-[900]:grid-cols-3">
          <a className="article" href="insights-article.html">
            <div className="thumb t-3">
              <span className="pill ai tag">AI Practice</span>
              <span className="glyph">◊</span>
            </div>
            <div className="meta">
              <span>Robin McGlashan</span>
              <span>·</span>
              <span>Feb 2026</span>
              <span>·</span>
              <span>8 min</span>
            </div>
            <h3 className="serif">
              The four AI layers every brand site should plan for.
            </h3>
            <p className="ex">
              Experience, content, growth, analytics — and why "AI chatbot"
              usually only covers a quarter of the value.
            </p>
            <span className="read">Read article →</span>
          </a>

          <a className="article" href="insights-article.html">
            <div className="thumb t-1">
              <span className="pill ai tag">AI Practice</span>
              <span className="glyph">⌁</span>
            </div>
            <div className="meta">
              <span>David Browne</span>
              <span>·</span>
              <span>Mar 2026</span>
              <span>·</span>
              <span>9 min</span>
            </div>
            <h3 className="serif">Personalisation without the creep factor.</h3>
            <p className="ex">
              A working pattern for first-party personalisation that improves
              the experience without spooking the user — or the regulator.
            </p>
            <span className="read">Read article →</span>
          </a>

          <a className="article" href="insights-article.html">
            <div className="thumb t-6">
              <span className="pill tag bg-ink border-line">Studio Ops</span>
              <span className="glyph">⌘</span>
            </div>
            <div className="meta">
              <span>David Browne</span>
              <span>·</span>
              <span>Feb 2026</span>
              <span>·</span>
              <span>5 min</span>
            </div>
            <h3 className="serif">Why our discovery is one week, not four.</h3>
            <p className="ex">
              What we cut to compress discovery without losing the strategic
              depth — and the one document we'd never skip.
            </p>
            <span className="read">Read article →</span>
          </a>
        </div>

        <div className="display: flex; justify-content: center; margin-top: 56px;">
          <a className="btn ghost" href="insights.html">
            All insights <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightsArticleRelated;
