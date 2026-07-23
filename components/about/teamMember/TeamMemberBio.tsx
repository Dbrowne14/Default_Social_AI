import type { Person } from "@/types/collections/person";
import { dummyPerson } from "@/data/dummyTeamData";

const TeamMemberBio = ({ person }: { person: Person }) => {
  const { bioParagraphs, expertise } = dummyPerson;

  if (!bioParagraphs?.length && !expertise?.length) {
    return null;
  }

  return (
    <section data-screen-label="Team member bio">
      <div className="container-custom py-0">
        
        <div className="max-w-[900px] space-y-10">
          
          <div className="eyebrow mb-8">Profile</div>

          {bioParagraphs && bioParagraphs.length > 0 && (
            <div className="flex flex-col gap-6">
              {bioParagraphs.map((paragraph, index) => (
                <p
                  key={`${index}-${paragraph.slice(0, 24)}`}
                  className="max-w-[100ch] text-[clamp(18px,1.6vw,21px)] leading-[1.65] text-cream-2"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {expertise && expertise.length > 0 && (
            <div className="mt-12">
              <div className="eyebrow mb-4">Expertise</div>

              <div className="flex flex-wrap gap-2.5">
                {expertise.map((item) => (
                  <span
                    className={
                      item.toLowerCase() === "ai integration"
                        ? "pill-ai"
                        : "pill"
                    }
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          

        </div>
      </div>
    </section>
  );
};

export default TeamMemberBio;
