"use client";
import { useState, useEffect } from "react";

const VERBS = ["design", "build", "launch", "scale", "grow"];

const HeroMidContent = () => {
  const [verbIndex, setVerbIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setVerbIndex((i) => (i + 1) % VERBS.length);
        setIsFading(false);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const mainHeading = [
    { word: "We", space: true, delay: 0.1 },
    { rotating: true },
    { break: true },
    { word: "the", space: true, delay: 0.3 },
    { word: "default", space: true, delay: 0.36 },
    { word: "for", delay: 0.46 },
    { break: true },
    { word: "ambitious", space: true, delay: 0.6 },
    { word: "brands.", delay: 0.7 },
  ];

  return (
<div className="relative mt-15 flex flex-1 items-center justify-start">
  <h1
    id="headline"
    className="
      relative m-0 max-w-[14ch]
      font-poppins font-semibold uppercase
      text-[clamp(38px,14vw,72px)]
      leading-[0.92] tracking-[-0.06em]
      text-cream mix-blend-difference
      720:text-[clamp(40px,11vw,120px)]
    "
  >
    {mainHeading.map((item, index) => {
      if ("break" in item) {
        return <br key={index} />;
      }

      if (item.rotating) {
        return (
          <span key={index} className="inline-block align-top overflow-visible">
            <span
              className={`
                inline-block min-w-[3.5ch]
                overflow-visible italic
                font-extrabold
                text-signal-red
                [-webkit-text-stroke:0.3px_white]
                transition-opacity duration-300
                ${isFading ? "opacity-0" : "opacity-100"}
              `}
            >
              {VERBS[verbIndex]}
            </span>

            {item.space ? "\u00A0" : ""}
          </span>
        );
      }

      return (
        <span key={index} className="inline-block align-top">
          <span className="inline-block overflow-hidden pb-[0.12em] mb-[-0.12em]">
            <span
              className="inline-block animate-rise"
              style={{
                animationDelay: `${item.delay}s`,
              }}
            >
              {item.word}
            </span>
          </span>

          {item.space ? "\u00A0" : ""}
        </span>
      );
    })}
  </h1>
</div>
  );
};

export default HeroMidContent;
