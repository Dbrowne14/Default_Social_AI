import Button from "@/components/ui/Button";

const HeroFooter = () => {
  return (
    <div className="hero-foot">
      <p className="desc">
        A digital media, marketing &amp; technology studio inside the Default
        Media Group — building AI-native websites, social systems and growth
        programmes for brands that want to set the standard, not chase it.
      </p>
      <div className="ctas">
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
