"use client";
import type { ToggleMenuProps } from "./types";

const NavCloseButton = ({ toggleMenu }: ToggleMenuProps) => {
  return (
   <button
  type="button"
  aria-label="Close menu"
  onClick={toggleMenu}
  className="
    absolute top-5 right-8
    inline-flex items-center justify-center
    w-10 h-10 p-0
    rounded-lg
    border border-line
    bg-[color-mix(in_oklch,var(--ink)_85%,transparent)]
    backdrop-blur-md
    cursor-pointer

    shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_8px_24px_rgba(0,0,0,0.25)]

    transition-all duration-200

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-accent
    focus-visible:ring-offset-2
  "
>
      <span className="absolute w-4.5 h-[1.5px] bg-cream rounded-xs rotate-45" />
      <span className="absolute w-4.5 h-[1.5px] bg-cream rounded-xs -rotate-45" />
    </button>
  );
};

export default NavCloseButton;
