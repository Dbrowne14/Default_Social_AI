"use client";
import { useState } from "react";

const NavHamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div>
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
      <div className="flex fixed top-0 left-0 right-0 z-55 720:hidden flex-col p-[80px_20px_28px]  bg-color-faded font-mono text-[14px] tracking-[0.08em] uppercase" id="mobileMenu" aria-hidden="true">
        <button
          className="absolute top-5 right-8 w-10 h-10 p-0 bg-transparent border border-line rounded-lg cursor-pointer inline-flex items-center justify-center"
          id="menuClose"
          aria-label="Close menu"
        >
          <span className="absolute w-4.5 h-[1.5] bg-cream rounded-xs transform-[rotate(45deg)]"></span>
          <span className="absolute w-4.5 h-[1.5] bg-cream rounded-xs transform-[rotate(-45deg)]"></span>
        </button>
        <a href="/" className="pt-4 px-1 text-cream-2 border-t border-line-faded">
          Index
        </a>
        <a href="services-v0.html" className="pt-4 px-1 text-cream-2 border-t border-line-faded">Services</a>
        <a href="about-v0.html" className="pt-4 px-1 text-cream-2 border-t border-line-faded">About</a>
        <a href="insights-v0.html" className="pt-4 px-1 text-cream-2 border-t border-line-faded">Insights</a>
      </div>
    </div>
  );
};

export default NavHamburgerMenu;
