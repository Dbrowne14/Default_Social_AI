import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex space-between items-center p-[18px, 32px] bg-[color-mix(in_oklch,var(--ink)_70%,transparent)] backdrop-blur-[20px] backdrop-saturate-160 border-b border-b-[color-mix(in_oklch,var(--line)_60%,transparent)]">
      <a
        href="index-v0-heroC.html"
        className="inline-flex items-center gap-3.5"
        aria-label="Default Social — part of Default Media Group"
      >
        <span className=" font-serif text-[24px] leading-1 tracking-[-0.01em] text-cream inline-flex items-baseline lowercase">
          default<em className="italic text-accent">/social</em>
        </span>
        <span className="w-px h-6.5 bg-line shrink-0" aria-hidden="true"></span>
        <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted leading-1">
          part of
        </span>
        <img
          className="h-5 width-auto block"
          src="assets/default-media-logo.png"
          alt="Default Media Group"
        />
      </a>
      <div className="flex gap-7 items-center font-mono text-[12px] tracking-widest uppercase text-cream-2 relative">
        <Link
          href="index-v0.html"
          className="
    relative
    after:absolute
    after:left-0
    after:bottom-0.5
    after:h-px
    after:w-full
    after:bg-accent-2
    after:content-['']
  "
        >
          Index
        </Link>
        <Link href="services-v0.html">
          Services
        </Link>
        <Link href="about-v0.html">
          About
        </Link>
        <Link href="insights-v0.html">
          Insights
        </Link>
      </div>
      <Link href="#contact" className="cta">
        Start a project <span>→</span>
      </Link>
    </nav>
  );
};

export default Navigation;
