import TeamBio from "@/components/ui/TeamBio";
import RichTitle from "../ui/RichTitle";
import type { AboutOverviewSection } from "@/types/pages/homePage";
import type { Person } from "@/types/collections/person";

type AboutOverviewProps = {
  section: AboutOverviewSection;
  featuredPeople: Person[];
};

const AboutOverview = async ({ section, featuredPeople }: AboutOverviewProps) => {
  const { eyebrow, title, meta, keyPeople } = section;
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
          {featuredPeople.map((person) => {
            return (
              <div key={person.name} className="min-w-60 md:min-w-0">
                <TeamBio
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
