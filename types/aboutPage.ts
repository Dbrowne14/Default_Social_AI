import type { PageHeading, TitleLine } from "./shared";

export type AboutPage = {
  aboutHeader: PageHeading;
  values: ValuesSection;
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
