import { writeClient } from "../sanity/lib/writeClient";
import { servicesDetails } from "@/data/serviceData";

async function importServices() {
  console.log(`Importing ${servicesDetails.length} services...`);

  for (const service of servicesDetails) {
    await writeClient.createOrReplace({
      _id: `service-${service.id}`,
      _type: "service",
      ...service,

      tags: service.tags.map((tag, index) => ({
        _key: `tag-${index}`,
        ...tag,
      })),

      offers: service.offers.map((offer, index) => ({
        _key: `offer-${index}`,
        ...offer,
      })),

      processSteps: service.processSteps.map((step) => ({
        _key: `step-${step.id}`,
        ...step,
      })),
    });

    console.log(`✓ ${service.category}`);
  }

  console.log("Done!");
}

importServices().catch((err) => {
  console.error(err);
  process.exit(1);
});
