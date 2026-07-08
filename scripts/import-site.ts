import { writeClient } from "../sanity/lib/writeClient";
import { siteSettings } from "../data/siteSettings";

async function importSiteSettings() {
  console.log("Importing site settings...");

  await writeClient.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    ...siteSettings,
  });

  console.log("✓ Site Settings");
  console.log("Done!");
}

importSiteSettings().catch((err) => {
  console.error("Site settings import failed:", err);
  process.exit(1);
});