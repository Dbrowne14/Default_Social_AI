// lib/content/site.ts
import { siteQuery } from "@/sanity/queries/site";
import { client } from "@/sanity/lib/client";
import { siteSettings as staticSiteSettings } from "@/data/siteSettings";
import type { SiteSettings } from "@/types/site";

export const getSiteSettings = async (): Promise<SiteSettings> => {
  const siteSettings = await client.fetch<SiteSettings | null>(siteQuery);

  return siteSettings ?? staticSiteSettings;
};