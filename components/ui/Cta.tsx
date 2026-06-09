import Button from "./Button";

export type CTAProps = {
  primaryText: string;
  secondaryText: string;
  variant?: boolean;
  buttonLink: string;
  buttonText: string;
};

const CTA = ({
  primaryText,
  secondaryText,
  variant,
  buttonLink,
  buttonText,
}: CTAProps) => {
  return (
    <section className=" border-t border-line">
      <div className="container-custom flex justify-between items-end flex-wrap gap-8">
        <h2 className="font-serif max-w-[18ch]">
          {primaryText}
          <br />
          {variant ? (
            <em className="text-accent">{secondaryText}</em>
          ) : (
            secondaryText
          )}
        </h2>
        <div className="flex gap-3">
          <Button
            link="/contact"
            text="Start a project"
            arrowVariant="primaryBlack"
          />
          <Button link={buttonLink} text={buttonText} variant="ghost" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
