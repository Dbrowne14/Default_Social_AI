import Button from "@/components/ui/Button";

const HeroFooter = () => {
  return (
    <div className="mt-12 flex justify-start opacity-0 animate-[fade-in_0.6s_2s_forwards] 720:justify-end">
      <div className="flex flex-wrap gap-3">
        <Button
          link="#contact"
          text="Get started"
          arrowVariant="primaryBlack"
        />

        <Button
          link="/services"
          text="Our Services"
          variant="dark"
          arrowVariant="primary"
        />
      </div>
    </div>
  );
};

export default HeroFooter;
