import NavLink from "../../ui/Navlink";
import Button from "../../ui/Button";
import NavHamburgerMenu from "./NavHamburgerMenu";
import { navData } from "@/data/navData";

const Navigation = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4.5 px-8 bg-[color-mix(in_oklch,var(--ink)_70%,transparent)] backdrop-blur-[20px] backdrop-saturate-160 border-b border-b-[color-mix(in_oklch,var(--line)_60%,transparent)] 720:px-5
  720:py-3.5"
    >
      <div className="inline-flex items-center gap-3.5 md:gap-2.5">
        <a
          href="/"
          className="font-serif text-[24px] leading-1 tracking-[-0.01em] text-cream inline-flex items-baseline lowercase md:text-[20px]"
          aria-label="Default Social"
        >
          default<em className="italic text-accent">/social</em>
        </a>

        <span className="w-px h-6.5 bg-line shrink-0 md:h-5.5" />

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
      </div>

      <div className="hidden 720:flex gap-7 items-center font-mono text-[12px] tracking-widest uppercase text-cream-2 relative">
        {navData.map((page, key) => {
          return (
            <NavLink href={page === "index" ? "/" : `/${page}`} key={key}>{page}</NavLink>
          );
        })}
      </div>

      <div className="hidden md:block">
        <Button link="#contact" text="Start a project" />
      </div>
      <NavHamburgerMenu />
    </nav>
  );
};

export default Navigation;
