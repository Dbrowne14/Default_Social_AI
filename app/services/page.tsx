import StickyToc from "@/components/services/StickyToc";
import ServicesHeader from "@/components/services/ServicesHeader";
import ServicesDetailed from "@/components/services/servicesDetailed/ServicesDetailed";
import CTA from "@/components/ui/Cta";
import type { Metadata } from "next";
import { getAllServicesPage } from "@/lib/content/servicesPage";
import { getAllServices } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI-powered web development, SEO, social campaigns, creative production and growth strategy for modern brands.",
};

const Page = async () => {
  const servicesPageData = await getAllServicesPage();
  const services = await getAllServices();
  return (
    <div data-screen-label="03 Services">
      <ServicesHeader servicesHeader={servicesPageData.servicesHeader} />
      <StickyToc services={services} />
      <ServicesDetailed />
      <CTA
        primaryText="Not sure where to start?"
        secondaryText="Talk to a strategist."
        variant={true}
        buttonLink="/about"
        buttonText="About the studio"
      />
    </div>
  );
};

export default Page;
