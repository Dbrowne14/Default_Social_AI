'use client'
import { servicesDetails } from "@/data/ServicesDetails";
import { useState } from "react";


const StickyTocPills = () => {
    const [isActive, setIsActive] = useState("web")

  return (
    <nav
      aria-label="Table of contents"
      className="flex gap-2 flex-wrap container-thin"
    >
      {servicesDetails.map((service) => {
        return (
          <a
            href={`#${service.linkName}`}
            className={`py-2 px-3.5 rounded-[999px] border  font-mono text-[11px] tracking-widest uppercase  transition-colors duration-150 ease-in-out hover:text-accent hover:border-accent ${isActive === service.linkName ? "text-accent border-accent": "text-cream-2 border-line"}`}
            onClick={() => setIsActive(service.linkName)}
          >
            {" "}
            {service.id} / {service.category}{" "}
          </a>
        );
      })}
    </nav>
  );
};

export default StickyTocPills;
