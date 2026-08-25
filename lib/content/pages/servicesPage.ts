import { sanityFetch } from "@/sanity/lib/live";
import { servicesPageQuery } from "@/sanity/queries/pages/servicesPage";
import type { ServicesPage } from "@/types/pages/servicesPage";

export const getServicesPage = async (): Promise<ServicesPage> => {
  const { data } = await sanityFetch({
    query: servicesPageQuery,
  });

  return data as ServicesPage;
};