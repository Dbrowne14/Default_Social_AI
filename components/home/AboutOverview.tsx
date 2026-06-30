import { team } from "@/data/teamData";
import TeamBio from "@/components/ui/TeamBio";
import { getAboutOVerview } from "@/lib/content/homePage";
import RichTitle from "../ui/RichTitle";

const AboutOverview = async () => {
  const { eyebrow, title, meta, keyPeople } = await getAboutOVerview();
  return (
    <section data-screen-label="About">
      <div className="container-thin md:mb-8">
        <div className="section-headings">
          <div className="section-title">
            <div className="eyebrow">{eyebrow}</div>
            <h2>
              <RichTitle title={title} />
            </h2>
          </div>
          <p className="meta">
            {meta}
            <a href="/about" className="text-accent hover:underline">
              More about the studio →
            </a>
          </p>
        </div>

        <div className="flex items-baseline gap-6 flex-wrap mb-8 mt-2">
          <span className="text-mono text-[11px] tracking-[0.12em] uppercase text-accent whitespace-nowrap">
            {keyPeople.label}
          </span>
          <p className="text-cream-2 text-[15px] max-w-[52ch]">
            {keyPeople.description}
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {" "}
          {team
            .filter((person) => person.keyPerson === true)
            .map((person) => {
              return (
                <div key={person.name} className="min-w-60 md:min-w-0">
                  <TeamBio
                    key={person.name}
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
