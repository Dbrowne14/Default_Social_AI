import { aboutPage as staticAboutPage } from "@/data/aboutPage";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/queries/pages/aboutPage";
import type { AboutPage } from "@/types/pages/aboutPage";

export const getAboutPage = async (): Promise<AboutPage> => {
  const page = await client.fetch<AboutPage | null>(aboutPageQuery);

  return page ?? staticAboutPage;
};
