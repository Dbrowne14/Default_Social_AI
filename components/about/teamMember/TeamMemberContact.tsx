import type { Person } from "@/types/collections/person";
import Button from "@/components/ui/Button";

const TeamMemberContact = ({ person }: { person: Person }) => {
  const { name } = person;
  const firstName = name.split(" ")[0];


  return (
    <section data-screen-label="Team member contact">
      <div className="container-custom py-18 md:py-22">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.8fr_1.3fr] md:gap-20">
          <div>
            <div className="eyebrow mb-5">Get in touch</div>

            <h2 className="text-[clamp(32px,3.6vw,48px)] leading-[0.96] tracking-[-0.02em]">
              Interested in
              <br />
              working with {firstName}?
            </h2>

            <p className="meta mt-6 max-w-[50ch]">
              Whether you're exploring a new project or simply want to start a
              conversation, we'd be happy to hear from you.
            </p>
          </div>

          <div className="flex items-center md:justify-end">
            <Button text="Brief the studio" link="/contact" variant="ghost" arrowVariant="primaryBlack" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberContact;
