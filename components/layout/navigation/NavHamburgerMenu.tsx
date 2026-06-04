"use client";
import { useState } from "react";
import NavOpenButton from "./NavOpenButton";
import MobileMenu from "./MobileMenu";

const NavHamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <NavOpenButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default NavHamburgerMenu;
