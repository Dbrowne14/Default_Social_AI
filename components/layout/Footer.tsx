import Link from "next/link"

//styling required
const Footer = () => {
  return (
    <div>
      <span className="footer-ribbon-spec"><span className="dot"></span>Scroll &amp; Fade · max-width 1360 · 32px gutters</span>
  <div className="footer-ribbon" aria-hidden="true"></div>
  <footer className="bg-ink pt-1 pb-10">
    <div className="container-custom">
      <div className="text-[clamp(80px,14vw,220px)] leading-[0.9] font-serif mt-20 tracking-[-0.02em]">default<span className="italic text-accent">/social</span></div>
      <div className="grid mt-16 gap-12  md:grid-cols-[2fr_1fr_1fr_1fr] xs520:grid-cols-2  grid-cols-1">
        <div className="footer-headings">
          <h4>The studio</h4>
          <p className=" text-cream-2 max-w-[38ch] leading-[1.55]">An AI-enabled digital media, marketing &amp; technology studio inside the Default Media Group.</p>
        </div>
        <div>
          <h4 className="footer-headings">Practices</h4>
          <ul className="flex flex-col gap-2.5 p-0 m-0 list-none ">
            <li >
              <Link className='footer-links' href="/services">Web Development</Link>
            </li>
            <li>
              <Link className='footer-links' href="/services">SEO &amp; Organic Growth</Link>
            </li>
            <li>
              <Link className='footer-links' href="/services">Social &amp; Viral Campaigns</Link>
            </li>
            <li>
              <Link className='footer-links' href="/services">Social-First Creative</Link>
            </li>
            <li>
              <Link className='footer-links' href="/services">Marketing Strategy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="footer-headings">Studio</h4>
          <ul className="flex flex-col gap-2.5 p-0 m-0 list-none text-cream-2 hover:text-accent">
            <li>
              <Link className='footer-links' href="/about">About</Link>
            </li>
            <li>
              <Link className='footer-links' href="/insights">Insights</Link>
            </li>
            <li>
              <Link className='footer-links' href="#contact">Contact</Link>
            </li>
            <li>
              <Link className='footer-links' href="https://defaultmedia.com">Default Media Group ↗</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="footer-headings" >Contact</h4>
          <ul className="flex flex-col gap-2.5 p-0 m-0 list-none ">
            <li><Link className='footer-links' href="/cdn-cgi/l/email-protection" data-cfemail="bcd5d2dad3fcd8d9daddc9d0c8d1d9d8d5dd92dfd3d1">[email&#160;protected]</Link></li>
            <li>+44 7878 849 182</li>
            <li>993 Great West Road,<br/>Brentford, TW8 9DF</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-end mt-16 pt-6 border-t border-t-line font-mono text-[11px] tracking-[0.088em] text-muted uppercase">
        <span>© 2026 Default Social. A Default Media Group company.</span>
        <span>Built with Next.js · CMS · AI</span>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
