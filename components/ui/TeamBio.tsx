import type { Person } from "@/types/collections/person";
import Portrait from "./Portrait";

const TeamBio = ({ initials, name, role, photo }: Person) => {
  return (
    <div className="flex flex-col gap-3">
      <Portrait initials={initials} alt={name} photo={photo} size="grid" />

      <div className="flex flex-col gap-1.5">
        <span className="heading-display text-[20px] leading-[1.05] tracking-[-0.02em] text-cream">
          {name}
        </span>

        <span className="font-dmSans text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
          {role}
        </span>
      </div>
    </div>
  );
};

export default TeamBio;
