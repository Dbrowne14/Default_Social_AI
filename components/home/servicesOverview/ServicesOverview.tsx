import ServicesBuckets from "@/components/home/servicesOverview/ServicesBuckets";
import Button from "@/components/ui/Button";
import { getServicesOverview } from "@/lib/content/homePage";
import RichTitle from "@/components/ui/RichTitle";

const ServicesOverview = async () => {
  const { eyebrow, title, meta } = await getServicesOverview();
  return (
    <section data-screen-label="Services">
      <div className="container-custom py-20">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">{eyebrow}</div>
            <h2>
              <RichTitle title={title} />
            </h2>
          </div>
          <p className="meta">{meta}</p>
        </div>

        <ServicesBuckets />

        <div className="mt-8 flex justify-end">
          <Button
            link="/services"
            text="Explore all services"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
