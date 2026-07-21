"use client";
import type { MobileMenuProps } from "./types";

const NavOpenButton = ({ menuOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <button
      id="navBurger"
className={`
  inline-flex flex-col justify-center gap-1.25
  w-10 h-10 px-2.25
  bg-ink-2
  border border-line
  rounded-lg
  cursor-pointer
  shadow-[0_12px_30px_rgba(0,0,0,0.35)]
  transition-all duration-200
  hover:-translate-y-px
  ${menuOpen ? "scale-95" : "scale-100"}
`}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
      onClick={toggleMenu}
      type="button"
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
