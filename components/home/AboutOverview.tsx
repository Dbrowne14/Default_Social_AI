import { team } from "@/data/teamData";
import TeamBio from "@/components/ui/TeamBio";

const AboutOverview = () => {
  return (
    <section data-screen-label="About">
      <div className="container-thin md:mb-8">
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
            the data, and both eyes on what&apos;s next.{" "}
            <a href="/about" className="text-accent hover:underline">
              More about the studio →
            </a>
          </p>
        </div>

        <div className="flex items-baseline gap-6 flex-wrap mb-8 mt-2">
          <span className="text-mono text-[11px] tracking-[0.12em] uppercase text-accent whitespace-nowrap">
            Key people
          </span>
          <p className="text-cream-2 text-[15px] max-w-[52ch]">
            Senior partners on the work — the team you meet in the pitch is the
            team that ships.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {" "}
          {team
            .filter((person) => person.key === true)
            .map((person, index) => {
              return (
                <div key={person.name} className="min-w-60 md:min-w-0">
                  <TeamBio
                    key={index}
                    initials={person.initials}
                    name={person.name}
                    role={person.role}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
