// types/site.ts

import type { LinkItem } from "./shared";

export type ContactDetails = {
  email: string;
  phone: string;
  location: string;
};

export type FooterContent = {
  eyebrow: string;
  description: string;
};

export type GroupLink = LinkItem & {
  src: string;
};

export type SiteSettings = {
  siteName: string;
  siteUrl: string;
  description:string;
  groupLink: GroupLink;
  contact: ContactDetails;
  footer: FooterContent;
};

export type SiteChromeProps = {
  siteSettings: SiteSettings;
  navigation: LinkItem[];
};
