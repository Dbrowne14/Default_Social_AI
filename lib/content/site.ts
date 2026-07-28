// lib/content/site.ts
import { siteQuery } from "@/sanity/queries/site";
import { client } from "@/sanity/lib/client";
import type { SiteSettings } from "@/types/site";
import { SANITY_FETCH_OPTIONS } from "@/sanity/lib/fetchOptions";

export const getSiteSettings = async (): Promise<SiteSettings> => {
  return await client.fetch<SiteSettings>(siteQuery, {}, SANITY_FETCH_OPTIONS);
};
