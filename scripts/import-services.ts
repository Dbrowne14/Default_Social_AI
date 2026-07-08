import { writeClient } from "../sanity/lib/writeClient";
import { servicesDetails } from "@/data/serviceData";

async function importServices() {
  console.log(`Importing ${servicesDetails.length} services...`);

  for (const service of servicesDetails) {
    await writeClient.createOrReplace({
      _id: `service-${service.id}`,
      _type: "service",
      ...service,
    });

    console.log(`✓ ${service.category}`);
  }

  console.log("Done!");
}

importServices().catch((err) => {
  console.error(err);
  process.exit(1);
});