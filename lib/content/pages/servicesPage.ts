import { client } from "@/sanity/lib/client";
import { servicesPageQuery } from "@/sanity/queries/pages/servicesPage";

import { servicesPage as staticServicesPage } from "@/data/servicesPage";
import type { ServicesPage } from "@/types/pages/servicesPage";

export const getServicesPage = async (): Promise<ServicesPage> => {
  const servicesPage = await client.fetch<ServicesPage | null>(
    servicesPageQuery,
  );

  return servicesPage ?? staticServicesPage;
};
