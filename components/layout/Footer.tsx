import React from 'react'

//styling required
const Footer = () => {
  return (
    <div>
      <span className="footer-ribbon-spec"><span className="dot"></span>Scroll &amp; Fade · max-width 1360 · 32px gutters</span>
  <div className="footer-ribbon" aria-hidden="true"></div>
  <footer className="footer">
    <div className="container">
      <div className="big-mark serif">default<span className="italic text-accent">/social</span></div>
      <div className="grid mt-16">
        <div>
          <h4>The studio</h4>
          <p className=" text-cream-2 max-w-[38ch] leading-[1.55]">An AI-enabled digital media, marketing &amp; technology studio inside the Default Media Group.</p>
        </div>
        <div>
          <h4>Practices</h4>
          <ul>
            <li><a href="services-v0.html">Web Development</a></li>
            <li><a href="services-v0.html">SEO &amp; Organic Growth</a></li>
            <li><a href="services-v0.html">Social &amp; Viral Campaigns</a></li>
            <li><a href="services-v0.html">Social-First Creative</a></li>
            <li><a href="services-v0.html">Marketing Strategy</a></li>
          </ul>
        </div>
        <div>
          <h4>Studio</h4>
          <ul>
            <li><a href="about-v0.html">About</a></li>
            <li><a href="insights-v0.html">Insights</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://defaultmedia.com">Default Media Group ↗</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bcd5d2dad3fcd8d9daddc9d0c8d1d9d8d5dd92dfd3d1">[email&#160;protected]</a></li>
            <li>+44 7878 849 182</li>
            <li>993 Great West Road,<br/>Brentford, TW8 9DF</li>
          </ul>
        </div>
      </div>
      <div className="colophon">
        <span>© 2026 Default Social. A Default Media Group company.</span>
        <span>Built with Next.js · CMS · AI</span>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
