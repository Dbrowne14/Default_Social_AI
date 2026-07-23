import Link from "next/link";
import Portrait from "@/components/ui/Portrait";
import type { Person } from "@/types/collections/person";
import { dummyPerson } from "@/data/dummyTeamData";

const TeamMemberHeader = ({ person }: { person: Person }) => {
  const {} = person;

  const {
    name,
    role,
    pronouns,
    focusArea,
    lede,
    initials,
    photo,
    discipline,
    joinedYear,
    location,
  } = dummyPerson;

  const facts = [
    { label: "Discipline", value: discipline },
    { label: "At the studio since", value: joinedYear },
    { label: "Based", value: location },
  ].filter((fact) => Boolean(fact.value));

  return (
    <header data-screen-label="Team member header">
      <div className="container-thin pt-nav">
        <nav
          className="mt-4 flex items-center gap-2.5 text-[9px] uppercase tracking-[0.2em] text-muted"
          aria-label="Breadcrumb"
        >
          <Link
            href="/about"
            className="text-muted transition-colors duration-150 ease-in-out hover:text-accent"
          >
            ← The team
          </Link>

          <span className="text-accent-deep">/</span>

          <span className="italic text-accent-deep">{name}</span>
        </nav>

        <div className="grid grid-cols-1 items-end gap-19  md:grid-cols-[1.15fr_0.85fr] pb-12 md:pb-16">
          <div className="md:pb-4">
            <div className="eyebrow">{role}</div>

            <h1 className="mt-6 max-w-[9ch] heading-display text-[clamp(56px,7.2vw,104px)] leading-[0.94] tracking-[-0.02em]">
              {name}
            </h1>

            {(pronouns || focusArea) && (
              <div className="mt-5.5 text-[11px] uppercase tracking-[0.16em] text-muted">
                {[pronouns, focusArea].filter(Boolean).join(" · ")}
              </div>
            )}

            {lede && <p className="lede mt-7 max-w-[48ch]">{lede}</p>}
          </div>

          <div className="ml-auto w-full max-w-[460px]">
            <Portrait
              initials={initials}
              alt={name}
              photo={photo}
              size="hero"
            />

            {facts.length > 0 && (
              <dl className="mt-4 overflow-hidden">
                {facts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className={[
                      "grid grid-cols-[0.9fr_1.1fr] items-center gap-4 px-5 py-5",
                      index > 0 ? "border-t border-line" : "",
                    ].join(" ")}
                  >
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-muted">
                      {fact.label}
                    </dt>

                    <dd className="text-[15px] text-right font-light leading-tight text-cream">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TeamMemberHeader;
