import { writeClient } from "../sanity/lib/writeClient";
import { insightsPage } from "../data/insightsPage";

import { withTitleLines } from "./utils";

async function importInsightsPage() {
  console.log("Importing Insights Page...");

  await writeClient.createOrReplace({
    _id: "insightsPage",
    _type: "insightsPage",

    insightsHeader: withTitleLines(insightsPage.insightsHeader),
  });

  console.log("✓ Insights Page");
  console.log("Done!");
}

importInsightsPage().catch((err) => {
  console.error("Insights page import failed:", err);
  process.exit(1);
});