import TeamBio from "../ui/TeamBio";
import { team } from "@/data/teamData";

const AboutTeam = () => {
  return (
    <section
      className="bg-[linear-gradient(180deg,var(--ink-2),var(--ink))] border-y border-line"
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

        <div className="grid gri-cols-1 xs520:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((person) => {
            return (
              <TeamBio
                key={person.initials}
                initials={person.initials}
                name={person.name}
                role={person.role}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
