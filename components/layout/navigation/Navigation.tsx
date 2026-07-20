import NavLink from "../../ui/Navlink";
import Button from "../../ui/Button";
import NavHamburgerMenu from "./NavHamburgerMenu";
import Link from "next/link";
import Image from "next/image";
import type { SiteChromeProps } from "@/types/site";

const Navigation = ({ siteSettings, navigation }: SiteChromeProps) => {
  const { groupLink } = siteSettings;
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 height-nav flex justify-between items-center py-4.5 px-8 bg-[color-mix(in_oklch,var(--ink)_70%,transparent)] backdrop-blur-[20px] backdrop-saturate-160 border-b border-b-[color-mix(in_oklch,var(--line)_60%,transparent)] 720:px-5
  720:py-3.5 max-w-[100vw]"
      aria-label="Primary navigation"
    >
      <div className="inline-flex items-center gap-3.5 md:gap-2.5">
        <Link
          href="/"
          className="font-serif text-[24px] leading-1 tracking-[-0.01em] text-cream inline-flex items-baseline lowercase md:text-[20px]"
          aria-label="Default Social"
        >
          <Image
            alt="Default Social"
            width={100}
            height={20}
            priority
            src="/assets/branding/Default-Alt_DF-SOCIAL-Black.png"
          />
        </Link>
      </div>

      <div className="hidden 720:flex gap-7 items-center font-mono text-[12px] tracking-widest uppercase text-cream-2 relative">
        {navigation.map((page) => {
          return (
            <NavLink href={page.href} key={page.label}>
              {page.label}
            </NavLink>
          );
        })}
      </div>

      <div className="hidden md:block">
        <Button link="/#contact" text="Start a project" />
      </div>
      <NavHamburgerMenu />
    </nav>
  );
};

export default Navigation;
