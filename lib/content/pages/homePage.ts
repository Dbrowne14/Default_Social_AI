import { homePageQuery } from "@/sanity/queries/pages/homePage";
import { sanityFetch } from "@/sanity/lib/live";
import type { HomePage } from "@/types/pages/homePage";

export const getHomePage = async (): Promise<HomePage> => {
  const { data } = await sanityFetch({
    query: homePageQuery,
  });

  return data as HomePage;
};