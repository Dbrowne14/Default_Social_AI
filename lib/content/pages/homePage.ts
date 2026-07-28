import { homePageQuery } from "@/sanity/queries/pages/homePage";
import { client } from "@/sanity/lib/client";
import type { HomePage } from "@/types/pages/homePage";
import { SANITY_FETCH_OPTIONS } from "@/sanity/lib/fetchOptions";

export const getHomePage = async (): Promise<HomePage> => {
  return await client.fetch<HomePage>(homePageQuery, {}, SANITY_FETCH_OPTIONS);


};
