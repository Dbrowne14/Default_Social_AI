import StickyToc from "@/components/services/StickyToc";
import ServicesHeader from "@/components/services/ServicesHeader";
import ServicesDetailed from "@/components/services/servicesDetailed/ServicesDetailed";
import CTA from "@/components/ui/Cta";

const Page = () => {
  return (
    <div data-screen-label="03 Services">
      <ServicesHeader />
      <StickyToc />
      <ServicesDetailed />
      <CTA primaryText="Not sure where to start?" secondaryText="Talk to a strategist." variant={true} buttonLink="/about" buttonText="About the studio" />
    </div>
  );
};

export default Page;
