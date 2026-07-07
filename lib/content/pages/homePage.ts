import { homePageQuery } from "@/sanity/queries/pages/homePage";
import { client } from "@/sanity/lib/client";
import { homePage as staticHomePage } from "@/data/homePage";
import type { HomePage } from "@/types/pages/homePage";

export const getHomePage = async (): Promise<HomePage> => {
  const homePage = await client.fetch<HomePage | null>(homePageQuery);

  return homePage ?? staticHomePage;
};
