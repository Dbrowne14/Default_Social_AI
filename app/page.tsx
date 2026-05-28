export default function Home() {
  return (
    <div>
      /*---complete later---*/
      <section id="hero" className="min-h-screen"></section>
      /*------------Marquee ticker----------*/
      <div className="ticker">
        <div className="marquee">
          <div className="marquee-track">
            <span className="item">
              Web Development <span className="dot"></span>
            </span>
            <span className="item italic serif">
              SEO &amp; Organic Growth <span className="dot"></span>
            </span>
            <span className="item">
              Social &amp; Viral Campaigns <span className="dot"></span>
            </span>
            <span className="item italic serif">
              Social-First Creative <span className="dot"></span>
            </span>
            <span className="item">
              Marketing Strategy <span className="dot"></span>
            </span>
            <span className="item italic serif">
              AI Integration <span className="dot"></span>
            </span>
          </div>
          <div className="marquee-track" aria-hidden="true">
            <span className="item">
              Web Development <span className="dot"></span>
            </span>
            <span className="item italic serif">
              SEO &amp; Organic Growth <span className="dot"></span>
            </span>
            <span className="item">
              Social &amp; Viral Campaigns <span className="dot"></span>
            </span>
            <span className="item italic serif">
              Social-First Creative <span className="dot"></span>
            </span>
            <span className="item">
              Marketing Strategy <span className="dot"></span>
            </span>
            <span className="item italic serif">
              AI Integration <span className="dot"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
