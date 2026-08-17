"use client";
import type { ServicesProps } from "@/types/collections/services";
import { useEffect, useRef, useState } from "react";

type StickyTocPillsProps = ServicesProps & {
  practicesStatement: string;
};

const StickyTocPills = ({
  services,
  practicesStatement,
}: StickyTocPillsProps) => {
  const [isActive, setIsActive] = useState("web");
  const [statementHidden, setStatementHidden] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const navPosition = nav.getBoundingClientRect().top + window.scrollY;
    const hideAt = navPosition + 100;

    const handleScroll = () => {
      setStatementHidden(window.scrollY > hideAt);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Table of contents"
      className="container-thin flex flex-wrap items-center gap-y-2"
    >
      <div
        className={`hidden overflow-hidden transition-[grid-template-columns] duration-300 ease-in-out md:grid ${
          statementHidden ? "grid-cols-[0fr]" : "grid-cols-[1fr]"
        }`}
      >
        <p
          className={`flex min-w-0 items-center gap-2 whitespace-nowrap pr-6 font-dmSans text-[11px] text-cream uppercase tracking-[0.2em] transition-opacity duration-200 ease-in-out ${
            statementHidden ? "opacity-0" : "opacity-100"
          }`}
        >
          <span aria-hidden="true" className="text-accent">
            ↳
          </span>

          {practicesStatement}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {services.map((service) => (
          <a
            href={`#${service.linkName}`}
            className={`rounded-[999px] border px-2.25 py-1 text-[10px] uppercase tracking-widest transition-colors duration-150 ease-in-out hover:border-accent hover:text-accent sm:px-3 sm:py-2 sm:text-[11px] ${
              isActive === service.linkName
                ? "border-accent text-accent"
                : "border-line text-cream-2"
            }`}
            onClick={() => setIsActive(service.linkName)}
            key={service.id}
          >
            <span className="hidden sm:inline">{service.id} / </span>
            {service.linkName}
          </a>
        ))}
      </div>
    </nav>
  );
};
export default StickyTocPills;
