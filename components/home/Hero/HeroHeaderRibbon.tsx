import React from "react";

const HeroHeaderRibbon = () => {
  return (
    <div className="flex justify-between items-center font-mono text-[11px] tracking-[0.14em] uppercase text-cream mix-blend-difference opacity-0 animate-[fade-in_0.5s_1.7s_forwards]">
      <div className="flex gap-4.5 items-center">
        <div className="inline-flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-3 shadow-[0_0_12px_var(--accent-3)] animate-pulse"></span>
          <span className="inline-flex items-center gap-2 text-accent-3">
            ON AIR
          </span>
        </div>
        <span>52°29′N · LDN</span>
        <span>v2026.05</span>
      </div>
      <div className="flex gap-4.5 items-center">
        <span>PART OF DEFAULT MEDIA GROUP</span>
      </div>
    </div>
  );
};

export default HeroHeaderRibbon;
