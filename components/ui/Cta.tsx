import Button from "./Button";
import type { PageCTA } from "@/types/shared";

const CTA = ({
  primaryText,
  secondaryText,
  variant,
  button,
}: PageCTA) => {
  return (
    <section className="">
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
          <Button link={button.href} text={button.label} variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
