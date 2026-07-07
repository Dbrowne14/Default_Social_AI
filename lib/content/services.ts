import { broaderServices } from "@/data/serviceData";
import { servicesQuery } from "@/sanity/queries/services";
import { client } from "@/sanity/lib/client";
import type { Service } from "@/types/services";

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
