import { client } from "@/sanity/lib/client";
import { servicesPageQuery } from "@/sanity/queries/pages/servicesPage";
import type { ServicesPage } from "@/types/pages/servicesPage";
import { SANITY_FETCH_OPTIONS } from "@/sanity/lib/fetchOptions";

export const getServicesPage = async (): Promise<ServicesPage> => {
  return await client.fetch<ServicesPage>(servicesPageQuery, {}, SANITY_FETCH_OPTIONS);
};
