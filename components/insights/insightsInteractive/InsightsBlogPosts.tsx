'use client'
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import BlogPost from "./BlogPost";
import type { ActiveFilterProps } from "./types";

const InsightsBlogPosts = ({isActive}:ActiveFilterProps) => {
  const [showMore, setShowMore] = useState<number>(6)

  useEffect(() => {
  const media = window.matchMedia("(max-width: 719px)");

  const update = () => {
    setShowMore(media.matches ? 3 : 6);
  };

  update();
  media.addEventListener("change", update);

  return () => media.removeEventListener("change", update);
}, []);
  return (
    <section className="pt-10">
      <div className="container-custom">
        <div className="section-headings mb-6">
          <div className="section-title">
            <div className="eyebrow">Library · 36 essays</div>
            <h2>Recent reading.</h2>
          </div>
          <p className="meta">
            Updated weekly. Long-form by default — we&apos;d rather publish one good
            essay than ten posts.
          </p>
        </div>

        <div
          className="grid grid-cols-1 xs520:grid-cols-2 md:grid-cols-3 gap-8 mt-6"
          id="articles-grid"
        >
          <BlogPost isActive={isActive} showMore={showMore} />
        </div>

        <div className="flex justify-center items-center mt-21">
          <Button
            text="Load more "
            variant="ghost"
            buttonDirection="down"
            onClick={() => setShowMore(prev => prev +6)}
          />
        </div>
      </div>
    </section>
  );
};

export default InsightsBlogPosts;

// compute number of essays not fixed text
