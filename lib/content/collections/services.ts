import { broaderServices } from "@/lib/broaderServices";
import { servicesQuery } from "@/sanity/queries/collections/services";
import { sanityFetch } from "@/sanity/lib/live";
import type { Service } from "@/types/collections/services";

export const getAllServices = async (): Promise<Service[]> => {
  const { data } = await sanityFetch({
    query: servicesQuery,
  });

  return data as Service[];
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