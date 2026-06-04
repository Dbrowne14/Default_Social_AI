import Link from "next/link";
import { navData } from "@/data/navData";
import NavCloseButton from "./NavCloseButton";

const MobileMenu = ({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div
      id="mobileMenu"
      aria-hidden={!menuOpen}
      className={`
          fixed top-0 left-0 right-0 z-55 720:hidden
          flex flex-col justify-center
          p-[80px_20px_28px]
          bg-color-faded
          font-mono text-[14px] tracking-[0.08em] uppercase
          transition-transform duration-320 ease-in-out
          will-change-transform
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
    >
      <NavCloseButton toggleMenu={toggleMenu} />
      {navData.map((page) => {
        return (
          <Link
            href={page === "index" ? "/" : `/${page}`}
            className="py-4 px-1 text-cream-2 border-t border-line-faded"
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileMenu;
