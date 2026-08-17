import StickyToc from "@/components/services/StickyToc";
import ServicesHeader from "@/components/services/ServicesHeader";
import WaysOfWorking from "@/components/services/waysOfWorking/WaysOfWorking";
import ServicesDetailed from "@/components/services/servicesDetailed/ServicesDetailed";
import CTA from "@/components/ui/Cta";
import type { Metadata } from "next";
import { getServicesPage } from "@/lib/content/pages/servicesPage";
import { getAllServices } from "@/lib/content/collections/services";
import { waysOfWorkingContent } from "@/lib/content/waysOfWorking";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI-powered web development, SEO, social campaigns, creative production and growth strategy for modern brands.",
};


const Page = async () => {
  const servicesPageData = await getServicesPage();
  const services = await getAllServices();

  const sanityWaysOfWorking = servicesPageData.waysOfWorking;

  const hasValidWaysOfWorking =
    sanityWaysOfWorking &&
    Array.isArray(sanityWaysOfWorking.title) &&
    Array.isArray(sanityWaysOfWorking.models);

  const waysOfWorking = hasValidWaysOfWorking
    ? sanityWaysOfWorking
    : waysOfWorkingContent;

  const { primaryText, secondaryText, button, variant } =
    servicesPageData.cta;

  return (
    <div data-screen-label="03 Services">
      <ServicesHeader servicesHeader={servicesPageData.servicesHeader} />

      <WaysOfWorking
        waysOfWorking={waysOfWorking}
        services={services}
      />

      <StickyToc
        services={services}
        practicesStatement={waysOfWorking.practicesStatement}
      />

      <ServicesDetailed services={services} />

      <CTA
        primaryText={primaryText}
        secondaryText={secondaryText}
        variant={variant}
        button={button}
      />
    </div>
  );
};

export default Page;
