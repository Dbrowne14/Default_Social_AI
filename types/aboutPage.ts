import type { PageHeading } from "./shared";

export type AboutPage = {
  aboutHeader: PageHeading;
};

export type AboutHeader = PageHeading & {
 companyInfo: CompanyInformation[]
}

export type CompanyInformation = {
    label: string
    value:string;
}