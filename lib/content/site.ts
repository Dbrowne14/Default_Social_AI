// lib/content/site.ts
import { siteQuery } from "@/sanity/queries/site";
import { client } from "@/sanity/lib/client";
import type { SiteSettings } from "@/types/site";

export const getSiteSettings = async (): Promise<SiteSettings> => {
  return await client.fetch(siteQuery);
};
