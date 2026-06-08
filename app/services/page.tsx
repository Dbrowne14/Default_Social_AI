import StickyToc from "@/components/services/StickyToc";
import ServicesHeader from "../../components/services/ServicesHeader";
import ServicesDetailed from "@/components/services/ServicesDetailed";

const Page = () => {
  return (
    <div data-screen-label="03 Services">
      <ServicesHeader />
      <StickyToc />

      <ServicesDetailed />
    </div>
  );
};

export default Page;
