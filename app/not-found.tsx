import Button from "@/components/ui/Button";
import { SignalAnimation } from "@/components/ui/signal-bars-nav";

export default function NotFound() {
  return (
    <section className="min-h-dvh flex items-center justify-center">
      <div className="p-8">
        <SignalAnimation size="large" />

        <p className="eyebrow mt-8">ERROR 404</p>

        <h1 className="heading-editorial mt-4">SIGNAL LOST.</h1>

        <p className="meta mt-6 max-w-md">
          The page you're looking for is no longer on this frequency.
        </p>

        <div className="mt-10">
          <Button
            text="Return Home"
            link="/"
            buttonDirection="up"
            variant="ghost"
            arrowVariant="primaryWhite"
          />
        </div>
      </div>
    </section>
  );
}
