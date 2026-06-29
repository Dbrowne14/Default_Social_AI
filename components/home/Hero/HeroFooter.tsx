import Button from "@/components/ui/Button";
import { getHeroFooter } from "@/lib/content/homePage";

const HeroFooter = async () => {
  const footerText = await getHeroFooter();
  return (
    <div className="grid 720:grid-cols-[1fr_auto] items-end gap-8 mt-12 opacity-0 animate-[fade-in_0.6s_2s_forwards] grid-cols-1 text-[10px] 720:text-[17px]">
      <p className="max-w-[46ch] text-black mix-blend-difference leading-normal">
        {footerText}
      </p>
      <div className="flex gap-3 flex-wrap">
        <Button
          link="#contact"
          text="Get started"
          arrowVariant="primaryBlack"
        />
        <Button link="/services" text="Our Services" variant="secondary" />
      </div>
    </div>
  );
};

export default HeroFooter;
