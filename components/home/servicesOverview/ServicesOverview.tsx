import ServicesBuckets from "@/components/home/servicesOverview/ServicesBuckets";
import Button from "@/components/ui/Button";
import RichTitle from "@/components/ui/RichTitle";
import type { SectionIntro } from "@/types/homePage";

type ServicesOverviewProps = {
  section: SectionIntro;
};

const ServicesOverview = ({ section }: ServicesOverviewProps) => {
  const { eyebrow, title, meta } = section;
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
