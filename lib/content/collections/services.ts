import type { ServiceTickerItem } from "@/types/collections/services";
import { servicesQuery } from "@/sanity/queries/collections/services";
import { client } from "@/sanity/lib/client";
import type { Service } from "@/types/collections/services";

export const broaderServices:ServiceTickerItem[] = [
  {
    id: "ai",
    label: "AI Integration",
    source: "theme",
  },
];

export const getAllServices = async (): Promise<Service[]> => {
  return client.fetch(servicesQuery);
};
export const getServiceTickerItems = async () => {
  const services = await getAllServices();

  return [
    ...services.map((service) => ({
      id: service.id,
      label: service.category,
      href: `/services#${service.linkName}`,
      source: "service" as const,
    })),
    ...broaderServices,
  ];
};
