import { homePageQuery } from "@/sanity/queries/pages/homePage";
import { client } from "@/sanity/lib/client";
import type { HomePage } from "@/types/pages/homePage";

export const getHomePage = async (): Promise<HomePage> => {
  return await client.fetch<HomePage>(homePageQuery);


};
