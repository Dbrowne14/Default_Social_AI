"use client";
import type { ServicesProps } from "@/types/collections/services";
import { useState } from "react";

const StickyTocPills = ({ services }: ServicesProps) => {
  const [isActive, setIsActive] = useState("web");

  return (
    <nav
      aria-label="Table of contents"
      className="flex gap-2 flex-wrap container-thin"
    >
      {services.map((service) => {
        return (
          <a
            href={`#${service.linkName}`}
            className={`py-1 px-2.25 sm:py-2 sm:px-3 rounded-[999px] border text-[10px] sm:text-[11px] tracking-widest uppercase  transition-colors duration-150 ease-in-out hover:text-accent hover:border-accent ${isActive === service.linkName ? "text-accent border-accent" : "text-cream-2 border-line"}`}
            onClick={() => setIsActive(service.linkName)}
            key={service.id}
          >
            {" "}
             
  <span className="hidden sm:inline">{service.id} / </span> {service.linkName}{" "}
          </a>
        );
      })}
    </nav>
  );
};

export default StickyTocPills;
