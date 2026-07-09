"use client";
import InsightsFilter from "./InsightsFilter";
import InsightsBlogPosts from "./InsightsBlogPosts";
import { useState } from "react";
import type { Insight } from "@/types/collections/insights";

const InsightsInteractive = ({ insights }: { insights: Insight[] }) => {
  const [isActive, setIsActive] = useState("All");
  return (
    <div>
      <InsightsFilter isActive={isActive} setIsActive={setIsActive} />
      <InsightsBlogPosts isActive={isActive} insights={insights} />
    </div>
  );
};

export default InsightsInteractive;
