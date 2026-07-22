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
    <div className="flex-1 flex items-center justify-start relative mt-15">
      <h1
        className="relative font-serif  text-[clamp(48px,14vw,72px)] 720:text-[clamp(50px,11vw,150px)] leading-[0.88] tracking-[-0.03em] text-cream max-w-[14ch] m-0 mix-blend-difference"
        id="headline"
      >
        {mainHeading.map((item, index) => {
          if ("break" in item) return <br key={index} />;

          return (
            <span
              key={index}
              className="inline-block overflow-hidden align-top px-[0.06em] mx-[-0.06em] pb-[0.12em] mb-[-0.12em]"
            >
              {item.rotating ? (
                <span
                  className={`
                inline-block italic min-w-[3.5ch] text-signal-red [-webkit-text-stroke:0.3px_white]
                transition-opacity duration-300
                ${isFading ? "opacity-0" : "opacity-100"}
              `}
                >
                  {VERBS[verbIndex]}
                </span>
              ) : (
                <span
                  className="inline-block animate-rise"
                  style={{
                    animationDelay: `${item.delay}s`,
                  }}
                >
                  <span className={`${item.word === "default" ? "":""}`}>{item.word}</span>
                  {item.space ? "\u00A0" : ""}
                </span>
              )}
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default HeroMidContent;
