import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";

type PortraitProps = {
  initials: string;
  alt: string;
  photo?: SanityImage;
  size?: "grid" | "hero";
};

const sizeClasses = {
  grid: "rounded-xl text-[72px]",
  hero: "rounded-2xl text-[clamp(90px,12vw,150px)]",
};

const Portrait = ({ initials, alt, photo, size = "grid" }: PortraitProps) => {
  return (
    <div
      className={`relative flex aspect-4/5 items-center justify-center overflow-hidden border border-line bg-[repeating-linear-gradient(135deg,var(--ink-2)_0_14px,var(--ink-3)_14px_28px)] ${sizeClasses[size]}`}
    >
      {photo ? (
        <Image
          src={urlFor(photo).width(900).height(1125).fit("crop").url()}
          alt={alt}
          fill
          sizes={size === "hero" ? "(min-width: 900px) 45vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
          className="object-cover"
          priority={size === "hero"}
        />
      ) : (
        <span className="font-serif leading-none tracking-[-0.03em] text-cream-2 opacity-40">
          {initials}
        </span>
      )}
    </div>
  );
};

export default Portrait;
