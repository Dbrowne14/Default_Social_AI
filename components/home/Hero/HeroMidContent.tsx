import React from "react";

const HeroMidContent = () => {
  const mainHeading = [
    { word: "We", space: true, delay: 0.1 },
    { word: "design", space: false, delay: 0.2, verb: true },
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
        className="relative font-serif text-[clamp(56px,11vw,168px)] leading-[0.88] tracking-[-0.03em] text-cream max-w-[14ch] m-0 mix-blend-difference"
        id="headline"
      >
        {mainHeading.map((item, index) => {
          if ("break" in item) return <br key={index} />;

          return (
            <span
              key={index}
              className="inline-block overflow-hidden align-top"
            >
              <span
                className={`inline-block animate-rise${item.verb ? "italic min-w-[3.5ch]" : ""}`}
                style={{ animationDelay: `${item.delay}s` }}
              >
                {item.word}
                {item.space ? "\u00A0" : ""}
              </span>
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default HeroMidContent;
