import { team } from "@/data/teamData";
import TeamBio from "@/components/ui/TeamBio";

const AboutOverview = () => {
  return (
    <section data-screen-label="About">
      <div className="container-custom">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">03 · About</div>
            <h2>
              A studio between
              <br />
              signal and craft.
            </h2>
          </div>
          <p className="meta">
            The digital, social &amp; technology arm of the Default Media Group
            — a ten-year-old company with one studio in Brentford, one foot in
            the data, and both eyes on what's next.{" "}
            <a href="/about" className="text-accent hover:underline">
              More about the studio →
            </a>
          </p>
        </div>

        <div className="flex items-baseline gap-6 flex-wrap mb-8 mt-2">
          <span className="text-mono text-[11px] tracking-[0.12em] uppercase text-accent whitespace-nowrap">
            Key people
          </span>
          <p className="text-cream-2 text-[15px] max-w=[52ch]">
            Senior partners on the work — the team you meet in the pitch is the
            team that ships.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xs520:grid-cols-2 gap-8">
          {team.map((person, index) => {
            return (
              <TeamBio
                key={index}
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

export default AboutOverview;
