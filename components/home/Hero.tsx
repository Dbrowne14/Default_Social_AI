import Button from "../ui/Button";

const Hero = () => {
  return (
    <header className="relative p-0 isolate overflow-hidden min-h-screen" data-screen-label="Hero">
        {/* Decorative blob canvas element. The canvas is used to render dynamic blob-like shapes that add a visually engaging and interactive element to the hero section of the website. The blobs can be animated to create a sense of movement and depth, enhancing the overall aesthetic appeal of the page. The canvas is positioned in such a way that it does not interfere with the readability of the content while still providing an eye-catching background effect see bottom for code. */}

      <div className="hero-content">
        <div className="flex justify-between items-center font-mono text-[11px] tracking-[0.14em] uppercase text-cream mix-blend-difference opacity-0 animate-[fade-in_0.5s_1.7s_forwards]">
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
            <Button link="#contact" text="Start a project" arrowVariant="primaryBlack" />
            <Button link="/services" text="Our Services" variant="ghost" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
//<canvas className="blob-canvas" id="blobs"></canvas>