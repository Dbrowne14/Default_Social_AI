import Link from "next/link";
import { navigationItems } from "@/app/layout";
import NavCloseButton from "./NavCloseButton";
import type { MobileMenuProps } from "./types";

const MobileMenu = ({ menuOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      aria-hidden={!menuOpen}
      className={`
          fixed top-0 left-0 right-0 z-55 720:hidden
          flex flex-col justify-center
          p-[80px_20px_28px]
          bg-color-faded
          font-mono text-[14px] tracking-[0.08em] uppercase
          transition-transform duration-320 ease-in-out
          will-change-transform
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
    >
      <NavCloseButton toggleMenu={toggleMenu} />
      {navigationItems.map((page) => {
        return (
          <Link
            href={page.label === "Index" ? "/" : `/${page.label.toLowerCase()}`}
            className="py-4 px-1 text-cream-2 border-t border-line-faded"
            key={page.label}
            onClick={toggleMenu}
          >
            {page.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileMenu;
