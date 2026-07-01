import type { PageHeading, TitleLine, SectionIntro } from "./shared";

export type AboutPage = {
  aboutHeader: AboutHeader;
  values: ValuesSection;
  groupStructure: GroupStructureSection;
};

export type AboutHeader = PageHeading & {
  companyInfo: CompanyInformation[];
};

export type CompanyInformation = {
  label: string;
  value: string;
};

export type ValuesSection = {
  eyebrow: string;
  statement: TitleLine[];
  intro: string;
  body: string[];
  callout: ValuesCallout;
};

export type ValuesCallout = {
  eyebrow: string;
  statement: TitleLine[];
};

export type GroupStructureSection = SectionIntro & {
  entries: GroupStructureEntry[];
  closingStatement: string;
};

export type GroupStructureEntry = {
  type: "parent" | "self" | "sibling";
  label: string;
  name: string;
  description: string;
};
