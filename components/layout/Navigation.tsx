import Link from "next/link";
import NavLink from "../ui/Navlink";
import Button from "../ui/Button";

const Navigation = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4.5 px-8 bg-[color-mix(in_oklch,var(--ink)_70%,transparent)] backdrop-blur-[20px] backdrop-saturate-160 border-b border-b-[color-mix(in_oklch,var(--line)_60%,transparent)] max-[720px]:px-5
  max-[720px]:py-3.5"
    >
      <a
        href="/"
        className="inline-flex items-center gap-3.5 md:gap-2.5"
        aria-label="Default Social — part of Default Media Group"
      >
        <span className=" font-serif text-[24px] leading-1 tracking-[-0.01em] text-cream inline-flex items-baseline lowercase md:text-[20px]">
          default<em className="italic text-accent">/social</em>
        </span>
        <span
          className="w-px h-6.5 bg-line shrink-0 md:h-5.5"
          aria-hidden="true"
        ></span>
        <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted leading-1 md:text-[8px] md:tracking-[0.14em]">
          part of
        </span>
        <a
          href="https://defaultmedia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-5 w-auto md:h-4 block"
            src="assets/default-media-logo.png"
            alt="Default Media Group"
          />
        </a>
      </a>
      {/*convert to hamburger menu at 720px */}
      <div className="flex gap-7 items-center font-mono text-[12px] tracking-widest uppercase text-cream-2 relative">
        <NavLink href="/">Index</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/insights">Insights</NavLink>
      </div>
      <Button link="#contact" text="Start a project"/>

    </nav>
  );
};

export default Navigation;
