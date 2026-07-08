import { writeClient } from "../sanity/lib/writeClient";
import { servicesPage } from "../data/servicesPage";
import { withTitleLines } from "./utils";



async function importServicesPage() {
  console.log("Importing Services Page...");

  await writeClient.createOrReplace({
    _id: "servicesPage",
    _type: "servicesPage",

    servicesHeader: withTitleLines(servicesPage.servicesHeader),

    cta: {
      ...servicesPage.cta,
      button: servicesPage.cta.button,
    },
  });

  console.log("✓ Services Page");
  console.log("Done!");
}

importServicesPage().catch((err) => {
  console.error("Services page import failed:", err);
  process.exit(1);
});