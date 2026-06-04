import Button from "@/components/ui/Button";

const HeroFooter = () => {
  return (
    <div className="grid 720:grid-cols-[1fr_auto] items-end gap-8 mt-12 opacity-0 animate-[fade-in_0.6s_2s_forwards] grid-cols-1 720:text-[10px]">
      <p className="max-w-[46ch] text-black mix-blend-difference text-[17px] leading-normal">
        A digital media, marketing &amp; technology studio inside the Default
        Media Group — building AI-native websites, social systems and growth
        programmes for brands that want to set the standard, not chase it.
      </p>
      <div className="flex gap-3 flex-wrap">
        <Button
          link="#contact"
          text="Start a project"
          arrowVariant="primaryBlack"
        />
        <Button link="/services" text="Our Services" variant="ghost" />
      </div>
    </div>
  );
};

export default HeroFooter;
