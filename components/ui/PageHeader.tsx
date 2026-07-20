import React from "react";
import RichTitle from "./RichTitle";
import type { TitleLine } from "@/types/shared";

type PageHeaderProps = {
  eyebrow: string;
  title: TitleLine[];
  children: React.ReactNode;
};

const PageHeader = ({ eyebrow, title, children }: PageHeaderProps) => {
  return (
    <header className="relative overflow-hidden pt-nav border-b border-line min-h-dvh md:min-h-screen flex items-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-100 blur-[140px] "
      />

      <div className="container-custom relative z-10">
        <div className="eyebrow mb-9">{eyebrow}</div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-20 md:gap-10 items-end">
          <h1 className="font-serif text-[clamp(56px,9vw,140px)]"> <RichTitle title={title}/></h1>
          {children}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
