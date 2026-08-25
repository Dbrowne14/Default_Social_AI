import { sanityFetch } from "@/sanity/lib/live";
import { aboutPageQuery } from "@/sanity/queries/pages/aboutPage";
import type { AboutPage } from "@/types/pages/aboutPage";

export const getAboutPage = async (): Promise<AboutPage> => {
  const { data } = await sanityFetch({
    query: aboutPageQuery,
  });

  return data as AboutPage;
};
