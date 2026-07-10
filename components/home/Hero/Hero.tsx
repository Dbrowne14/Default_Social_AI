import HeroHeaderRibbon from "./HeroHeaderRibbon";
import HeroMidContent from "./HeroMidContent";
import HeroFooter from "./HeroFooter";
import HeroAnimation from "./HeroAnimation";
import type { HomeHero } from "@/types/pages/homePage";

const Hero = ({ hero }: { hero: HomeHero }) => {
  return (
    <header
      className="relative p-0 isolate overflow-hidden min-h-dvh md:min-h-screen"
      data-screen-label="Hero"
    >
      {/* Decorative blob canvas element. The canvas is used to render dynamic blob-like shapes that add a visually engaging and interactive element to the hero section of the website. The blobs can be animated to create a sense of movement and depth, enhancing the overall aesthetic appeal of the page. The canvas is positioned in such a way that it does not interfere with the readability of the content while still providing an eye-catching background effect see bottom for code. */}

      <div className="hero-content">
        <HeroAnimation />
        <HeroHeaderRibbon />
        <HeroMidContent />
        <HeroFooter footerText={hero.footer_Text} />
      </div>
    </header>
  );
};

export default Hero;
//<canvas className="blob-canvas" id="blobs"></canvas>
