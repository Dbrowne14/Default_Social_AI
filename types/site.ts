// types/site.ts

import type { Link } from "./shared";

export type ContactDetails = {
  email: string;
  phone: string;
  location: string;
};

export type FooterContent = {
  eyebrow: string;
  description: string;
};

export type GroupLink = Link & {
    src:string;
}

export type SiteSettings = {
  siteName: string;
  siteUrl: string;
  groupLink: GroupLink;
  contact: ContactDetails;
  footer: FooterContent;
};
