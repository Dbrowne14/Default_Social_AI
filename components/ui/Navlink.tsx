"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignalAnimation } from "./signal-bars-nav";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  toggleMenu?: () => void;
};

export default function NavLink({ href, children, toggleMenu }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        relative
        py-2
        flex
        gap-4
        hover:text-cream
        w-fit
        ${
          isActive
            ? "text-cream  after:absolute  after:left-0 after:bottom-0.5 after:h-px after:w-full after:bg-line after:content-['']"
            : "text-cream-2"
        }
      
      `}
      onClick={toggleMenu}
    >
      <SignalAnimation />
      {children}
    </Link>
  );
}
