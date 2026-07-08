import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/queries/pages/aboutPage";
import type { AboutPage } from "@/types/pages/aboutPage";

export const getAboutPage = async (): Promise<AboutPage> => {
  return await client.fetch<AboutPage>(aboutPageQuery);
};
