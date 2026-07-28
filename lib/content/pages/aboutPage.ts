import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/queries/pages/aboutPage";
import type { AboutPage } from "@/types/pages/aboutPage";
import { SANITY_FETCH_OPTIONS } from "@/sanity/lib/fetchOptions";

export const getAboutPage = async (): Promise<AboutPage> => {
  return await client.fetch<AboutPage>(
    aboutPageQuery,
    {},
    SANITY_FETCH_OPTIONS,
  );
};
