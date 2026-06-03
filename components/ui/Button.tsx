import Link from "next/link";

type ButtonProps = {
  link: string;
  text: string;
  variant?: "primary" | "ghost";
  arrowVariant?: "primary" | "primaryBlack";
};

const variants = {
  primary: `
    bg-accent
    text-on-accent
    border-transparent
    hover:bg-accent-deep
    hover:text-on-accent
    font-semibold`,
  ghost: `
    btn
    bg-transparent
    text-cream
    border
    border-line
    hover:border-accent
    hover:text-accent`,
};

const arrowVariants= {
  primary: `bg-accent text-on-accent`,
  primaryBlack: `bg-cream text-ink`,
}

export default function Button({
  link,
  text,
  variant = "primary",
  arrowVariant = "primary",
}: ButtonProps) {
  const classes = `text-[12px] inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono uppercase transition-all duration-150 ease-in-out hover:-translate-y-px tracking-widest
    ${variants[variant]}`;

  const content = (
    <>
      {text}
      <span className={`flex size-4.5 shrink-0 items-center justify-center rounded-full ${arrowVariants[arrowVariant]} text-[10px] leading-none`}>
        →
      </span>
    </>
  );

  if (link.startsWith("#")) {
    return (
      <a href={link} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={link} className={classes}>
      {content}
    </Link>
  );
}
