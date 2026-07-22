import type { Person } from "@/types/collections/person";

const TeamBio = ({ initials, name, role }: Person) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex aspect-4/5 items-center justify-center overflow-hidden rounded-xl border border-line bg-[repeating-linear-gradient(135deg,var(--ink-2)_0_14px,var(--ink-3)_14px_28px)]">
        <span className="font-serif text-[72px] leading-none tracking-[-0.03em] text-cream-2 opacity-40">
          {initials}
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="font-serif text-[24px] leading-[1.05] tracking-[-0.02em] text-cream">
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
