'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignalAnimation } from "./signal-bars-nav";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href ;

  return (
    <Link
      href={href}
      className={`
        relative
        py-2
        hidden
        720:flex
        gap-2
        hover:text-cream
        ${
          isActive
            ? "text-cream  after:absolute  after:left-0 after:bottom-0.5 after:h-px after:w-full after:bg-line after:content-['']"
            : "text-cream-2"
        }
      `}
    >
      <SignalAnimation/>
      {children}
    </Link>
  );
}