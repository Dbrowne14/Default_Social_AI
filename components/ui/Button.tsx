import Link from "next/link";

type ButtonProps = {
  link?: string;
  onClick?: () => void;
  text: string;
  variant?: "primary" | "ghost" | "secondary" | "dark";
  arrowVariant?: "primary" | "primaryBlack";
  buttonDirection?: Direction;
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
  secondary: `
    bg-cream
    text-ink
    border
    border-cream
    hover:bg-cream-2
    hover:border-cream-2`,
  dark: `bg-[#141416]
    border
    border-transparent
    text-cream
    hover:bg-[var(--ink-2)]
    hover:border-[var(--line)]
    transition-all
    duration-300`,
};

const arrowVariants = {
  primary: `bg-accent text-on-accent`,
  primaryBlack: `bg-cream text-ink`,
};

const buttonDirections = {
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
} as const;

type Direction = keyof typeof buttonDirections;

export default function Button({
  link,
  text,
  onClick,
  variant = "primary",
  arrowVariant = "primary",
  buttonDirection = "right",
}: ButtonProps) {
  const classes = `text-[12px] inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono uppercase transition-all duration-150 ease-in-out hover:-translate-y-px tracking-widest
    ${variants[variant]}`;

  const content = (
    <>
      {text}
      <span
        className={`flex size-4.5 shrink-0 items-center justify-center rounded-full ${arrowVariants[arrowVariant]} text-[10px] leading-none`}
      >
        {buttonDirections[buttonDirection]}
      </span>
    </>
  );

  if (link?.startsWith("#")) {
    return (
      <a href={link} className={classes}>
        {content}
      </a>
    );
  }

  if (link) {
    return (
      <Link href={link} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
