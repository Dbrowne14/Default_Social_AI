import { navigationItems } from "@/lib/navigation";
import type { MobileMenuProps } from "./types";
import NavLink from "@/components/ui/Navlink";

const MobileMenu = ({ menuOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      aria-hidden={!menuOpen}
      className={`
          fixed top-0 left-0 right-0 z-55 720:hidden
          flex flex-col justify-center items-center
          min-h-screen
          p-[80px_20px_28px]
          bg-color-faded
          font-mono text-[20px] tracking-[0.08em] uppercase
          transition-transform duration-500 ease-in-out
          will-change-transform
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
    >
      {navigationItems.map((page) => {
        return (
          <NavLink
            href={page.label === "Index" ? "/" : `/${page.label.toLowerCase()}`}
            key={page.label}
            toggleMenu={toggleMenu}
          >
            {page.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default MobileMenu;
