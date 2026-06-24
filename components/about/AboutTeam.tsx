import TeamBio from "../ui/TeamBio";
import { team } from "@/data/teamData";

const AboutTeam = () => {
  return (
    <section
      className="bg-[linear-gradient(180deg,var(--ink-2),var(--ink))] border-t border-line"
      data-screen-label="Team"
    >
      <div className="container-custom">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">05 · The team</div>
            <h2>
              Senior people,
              <br />
              on the work.
            </h2>
          </div>
          <p className="meta">
            A flat structure of practice leads. Each owns a discipline; each
            ships their own work.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:overflow-visible md:grid-cols-4">
          {team.map((person) => (
            <div key={person.initials} className="shrink-0 w-50 md:w-auto">
              <TeamBio
                initials={person.initials}
                name={person.name}
                role={person.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
