import TeamBio from "../ui/TeamBio";
import type { Person } from "@/types/collections/person";
import type { SectionIntro } from "@/types/shared";
import RichTitle from "../ui/RichTitle";
import Link from "next/link";

type AboutTeamProps = {
  people: Person[];
  aboutHeader: SectionIntro;
};

const AboutTeam = ({ people, aboutHeader }: AboutTeamProps) => {
  const { eyebrow, title, meta } = aboutHeader;
  return (
    <section
      className=""
      data-screen-label="Team"
    >
      <div className="container-custom">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">{eyebrow}</div>
            <h2>
              <RichTitle title={title} />
            </h2>
          </div>
          <p className="meta">{meta}</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:overflow-visible md:grid-cols-4">
          {people.map((person) => (
            <Link
              key={person.slug}
              href={`/about/${person.slug}`}
              className="shrink-0 w-50 md:w-auto"
            >
              <TeamBio
                slug={person.slug}
                initials={person.initials}
                name={person.name}
                role={person.role}
                photo={person.photo}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
