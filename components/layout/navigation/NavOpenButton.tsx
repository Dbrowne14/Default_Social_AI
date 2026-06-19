"use client";
import type { NavMenuProps } from "@/types";

const NavOpenButton = ({ menuOpen, toggleMenu }: NavMenuProps) => {
  return (
    <button
      id="navBurger"
      className={`
          inline-flex flex-col justify-center gap-1.25
          w-10 h-10 px-2.25
          bg-transparent border border-line rounded-lg cursor-pointer
          720:hidden transition-transform duration-200
          ${menuOpen ? "scale-95" : "scale-100"}
        `}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="mobileMenu"
      onClick={toggleMenu}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={`
              block h-px bg-cream rounded-xs
              transition-all duration-200
              ${menuOpen && i === 1 ? "opacity-40 w-3/4" : "opacity-100 w-full"}
            `}
        />
      ))}
    </button>
  );
};

export default NavOpenButton;
