import StickyToc from "@/components/services/StickyToc";
import ServicesHeader from "@/components/services/ServicesHeader";
import ServicesDetailed from "@/components/services/servicesDetailed/ServicesDetailed";
import ServicesContact from "@/components/services/ServicesContact";

const Page = () => {
  return (
    <div data-screen-label="03 Services">
      <ServicesHeader />
      <StickyToc />
      <ServicesDetailed />
      <ServicesContact />
    </div>
  );
};

export default Page;
