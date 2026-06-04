"use client";
import { useState } from "react";

const NavHamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <button
      className={`inline-flex flex-col justify-center gap-1.25 w-10 h-10 px-2.25 bg-transparent border border-line rounded-lg cursor-pointer 720:hidden   transition-transform duration-200
      ${menuOpen ? "scale-95" : "scale-100"} "
      id="navBurger`}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="mobileMenu"
      onClick={toggleMenu}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={`block h-px w-full bg-cream rounded-xs [transition:transform_.25s_ease,opacity_.2s_ease] ${menuOpen ? "opacity-40 w-3/4" : "opacity-100 w-full"}`}
        ></span>
      ))}
    </button>
  );
};

export default NavHamburgerMenu;
