"use client";
import { useState } from "react";
import NavOpenButton from "./NavOpenButton";
import MobileMenu from "./MobileMenu";
import NavLink from "@/components/ui/Navlink";
import type { LinkItem } from "@/types/shared";

const NavHamburgerMenu = ({ navigation }: { navigation: LinkItem[] }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between gap-30">
      <div
        className={`hidden 720:flex gap-7 items-center font-mono text-[12px] tracking-widest uppercase text-cream-2 relative transition-all duration-500
    ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
      >
        {navigation.map((page) => {
          return (
            <NavLink href={page.href} key={page.label}>
              {page.label}
            </NavLink>
          );
        })}
      </div>
      <NavOpenButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default NavHamburgerMenu;
