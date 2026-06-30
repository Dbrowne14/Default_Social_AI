import { servicesDetails, broaderServices } from "@/data/servicesDetails";

export const getAllServices = async () => {
    return servicesDetails;
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
}