"use client";
import type { ToggleMenuProps } from "@/types";

const NavCloseButton = ({ toggleMenu }: ToggleMenuProps) => {
  return (
    <button
      className="absolute top-5 right-8 w-10 h-10 p-0 bg-transparent border border-line rounded-lg cursor-pointer inline-flex items-center justify-center"
      aria-label="Close menu"
      onClick={toggleMenu}
    >
      <span className="absolute w-4.5 h-[1.5px] bg-cream rounded-xs rotate-45" />
      <span className="absolute w-4.5 h-[1.5px] bg-cream rounded-xs -rotate-45" />
    </button>
  );
};

export default NavCloseButton;
