import React from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
};

const PageHeader = ({ eyebrow, title, children }: PageHeaderProps) => {
  return (
    <header className="relative overflow-hidden pt-nav border-b border-line min-h-screen flex items-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-100 blur-[140px] bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklch,var(--accent)_40%,transparent),transparent_42%),radial-gradient(circle_at_85%_15%,color-mix(in_oklch,var(--accent-2)_48%,transparent),transparent_36%),radial-gradient(circle_at_50%_40%,color-mix(in_oklch,var(--accent-3)_22%,transparent),transparent_52%)]"
      />

      <div className="container-custom relative z-10">
        <div className="eyebrow mb-9">{eyebrow}</div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-20 md:gap-10 items-end">
          <h1 className="font-serif text-[clamp(56px,9vw,140px)]"> {title}</h1>
          {children}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
