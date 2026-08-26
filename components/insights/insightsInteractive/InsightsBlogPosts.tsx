"use client";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import BlogPost from "./BlogPost";
import type { InsightBlogPostsProps } from "./types";

const InsightsBlogPosts = ({ isActive, insights }: InsightBlogPostsProps) => {
  const [showMore, setShowMore] = useState<number>(6);

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
    <section className="">
      <div className="container-custom pt-0">
        <div
          className="grid grid-cols-1 xs520:grid-cols-2 md:grid-cols-3 gap-8 pt-4 "
          id="articles-grid"
        >
          <BlogPost
            isActive={isActive}
            showMore={showMore}
            insights={insights}
          />
        </div>

        {insights?.length > 6 && (
          <div className="flex justify-center items-center mt-21">
            <Button
              text="Load more "
              variant="ghost"
              buttonDirection="down"
              onClick={() => setShowMore((prev) => prev + 6)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightsBlogPosts;

// compute number of essays not fixed text
