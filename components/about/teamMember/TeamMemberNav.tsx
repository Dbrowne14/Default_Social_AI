import Link from "next/link";
import type { Person } from "@/types/collections/person";
import { dummyPerson } from "@/data/dummyTeamData";

const TeamMemberNav = ({
  people,
  currentSlug,
}: {
  people: Person[];
  currentSlug: string;
}) => {
  if (people.length < 2) {
    return null;
  }

  const currentIndex = people.findIndex((person) => person.slug === currentSlug);
  const prev = people[(currentIndex - 1 + people.length) % people.length];
  const next = people[(currentIndex + 1) % people.length];

  return (
    <nav
      className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border-t border-line"
      aria-label="Team member navigation"
      data-screen-label="Team member navigation"
    >
      <Link
        href={`/about/${prev.slug}`}
        className="group flex flex-col gap-2.5 bg-ink px-8 py-10 transition-colors duration-200 ease-in-out hover:bg-ink-2"
      >
        <span className="text-[10px] tracking-[0.14em] uppercase text-muted">
          ← Previous
        </span>
        <span className="heading-display text-[clamp(20px,3vw,35px)] leading-none group-hover:text-accent">
          {prev.name}
        </span>
        <span className="text-[11px] tracking-[0.08em] uppercase text-cream-2">
          {prev.role}
        </span>
      </Link>
      <Link
        href={`/about/${next.slug}`}
        className="group flex flex-col items-end gap-2.5 bg-ink px-8 py-10 text-right transition-colors duration-200 ease-in-out hover:bg-ink-2"
      >
        <span className="text-[10px] tracking-[0.14em] uppercase text-muted">
          Next →
        </span>
        <span className="heading-display text-[clamp(20px,3vw,35px)] leading-none group-hover:text-accent">
          {next.name}
        </span>
        <span className="text-[11px] tracking-[0.08em] uppercase text-cream-2">
          {next.role}
        </span>
      </Link>
    </nav>
  );
};

export default TeamMemberNav;
