import Button from "../ui/Button";

const ServicesContact = () => {
  return (
    <section className=" border-t border-line">
      <div className="container-custom flex justify-between items-end flex-wrap gap-8">
        <h2 className="font-serif max-w-[18ch]">
          Not sure where to start?
          <br />
          <em className="text-accent">Talk to a strategist.</em>
        </h2>
        <div className="flex gap-3">
          <Button
            link="/contact"
            text="Start a project"
            arrowVariant="primaryBlack"
          />
          <Button link="/about" text="About the studio" variant="ghost" />
        </div>
      </div>
    </section>
  );
};

export default ServicesContact;
