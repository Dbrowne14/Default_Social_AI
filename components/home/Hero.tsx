import React from "react";

const Hero = () => {
  return (
    <header className="hero" data-screen-label="Hero">
      <canvas className="blob-canvas" id="blobs"></canvas>

      <div className="hero-content">
        <div className="hero-statusbar">
          <div className="left">
            <span className="live">ON AIR</span>
            <span>52°29′N · LDN</span>
            <span>v2026.05</span>
          </div>
          <div className="right">
            <span>PART OF DEFAULT MEDIA GROUP</span>
          </div>
        </div>

        <div className="hero-mid">
          <h1 className="hero-headline" id="headline">
            <span className="word [animation-delay:0.1s]">
              <span className="[animation-delay:0.1s]">We&nbsp;</span>
            </span>
            <span className="word">
              <span id="hero-verb" className=" verb [animation-delay:0.2s]">
                design
              </span>
            </span>
            <br />
            <span className="word">
              <span className="[animation-delay:0.3s]">the&nbsp;</span>
            </span>
            <span className="word">
              <span className="[animation-delay:0.36s]">default&nbsp;</span>
            </span>
            <span className="word">
              <span className="[animation-delay:0.46s]">for</span>
            </span>
            <br />
            <span className="word">
              <span className="[animation-delay:0.6s]">ambitious&nbsp;</span>
            </span>
            <span className="word">
              <span className="[animation-delay:0.7s]">brands.</span>
            </span>
          </h1>
        </div>

        <div className="hero-foot">
          <p className="desc">
            A digital media, marketing &amp; technology studio inside the
            Default Media Group — building AI-native websites, social systems
            and growth programmes for brands that want to set the standard, not
            chase it.
          </p>
          <div className="ctas">
            <a className="btn" href="#contact">
              Start a project <span className="arr">→</span>
            </a>
            <a className="btn ghost" href="services-v0.html">
              Our services <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
