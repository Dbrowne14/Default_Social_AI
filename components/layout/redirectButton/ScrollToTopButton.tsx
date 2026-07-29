"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 500;

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-[calc(1rem+env(safe-area-inset-bottom))]
        right-4 z-50
        flex size-11 items-center justify-center
        rounded-full border border-line
        bg-ink/90 text-cream-2 backdrop-blur-md
        transition-[opacity,transform,background-color,border-color]
        duration-200 ease-out
        hover:border-accent hover:bg-accent hover:text-on-accent
        focus-visible:outline-2 focus-visible:outline-offset-4
        focus-visible:outline-accent
        motion-reduce:transition-none
        md:hidden
        ${
          isVisible
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }
      `}
    >
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m6 11 6-6 6 6" />
      </svg>
    </button>
  );
};