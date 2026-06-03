import ServicesBuckets from "@/components/home//subComponents/ServicesBuckets";
import Button from "@/components/ui/Button";
const ServicesOverview = () => {
  return (
    <section data-screen-label="Services">
      <div className="container-custom py-20">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">02 · Services</div>
            <h2>
              Five practices,
              <br />
              one operating model.
            </h2>
          </div>
          <p className="meta">
            Each practice is led by a senior partner and runs as an autonomous
            unit, networked through a shared AI and data layer. Engage them
            individually — or as a programme.
          </p>
        </div>

        <ServicesBuckets />

        <div className="mt-8 flex justify-end">
          <Button
            link="/services"
            text="Explore all services"
            variant="ghost"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
