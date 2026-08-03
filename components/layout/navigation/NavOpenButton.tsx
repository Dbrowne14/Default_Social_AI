"use client";
import type { MobileMenuProps } from "./types";

const NavOpenButton = ({ menuOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <button
      id="navBurger"
      type="button"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
      onClick={toggleMenu}
      className={`
        relative z-60
        size-10
        rounded-lg
        appearance-none
        cursor-pointer
        shadow-[0_12px_30px_rgba(0,0,0,0.35)]
        transition-transform duration-200
        [-webkit-tap-highlight-color:transparent]
        ${menuOpen ? "scale-95" : "scale-100 hover:-translate-y-px"}
      `}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`
            absolute left-1/2 top-1/2
            block h-0.5 w-5
            -translate-x-1/2
            bg-cream
            origin-center
            transition-[transform,opacity]
            duration-300
            ease-out
            ${
              menuOpen
                ? index === 0
                  ? "-translate-y-1/2 rotate-45"
                  : index === 1
                    ? "-translate-y-1/2 scale-x-0 opacity-0"
                    : "-translate-y-1/2 -rotate-45"
                : index === 0
                  ? "-translate-y-1.75"
                  : index === 1
                    ? "-translate-y-1/2"
                    : "translate-y-1.25"
            }
          `}
        />
      ))}
    </button>
  );
};

export default NavOpenButton;
