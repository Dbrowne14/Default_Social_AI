
import type { Person } from "@/types/person";

const TeamBio = ({ initials, name, role }: Person) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-4/5 overflow-hidden rounded-xl border border-line bg-[repeating-linear-gradient(135deg,var(--ink-2)_0_14px,var(--ink-3)_14px_28px)] flex items-center justify-center">
        <span className="font-serif text-[72px] text-cream-2 opacity-40">
          {initials}
        </span>
      </div>
      <span className="font-serif text-[22px]">{name}</span>
      <span className="font-mono text-[11px] tracking-widest text-muted uppercase">
        {role}
      </span>
    </div>
  );
};

export default TeamBio;
