"use client";
import InsightsFilter from "./InsightsFilter";
import InsightsBlogPosts from "./InsightsBlogPosts";
import { useState } from "react";
import type { InsightsProps } from "./types";

const InsightsInteractive = ({ insights }: InsightsProps) => {
  const [isActive, setIsActive] = useState("All");
  return (
    <div>
      <div className="container-thin pt-16 md:pt-20 pb-2">
        <div className="eyebrow">The Library</div>
      </div>

      <InsightsFilter isActive={isActive} setIsActive={setIsActive} insights={insights} />
      <InsightsBlogPosts isActive={isActive} insights={insights} />
    </div>
  );
};

export default InsightsInteractive;
