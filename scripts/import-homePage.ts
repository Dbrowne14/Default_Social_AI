import { writeClient } from "../sanity/lib/writeClient";
import { homePage } from "../data/homePage";
import { withTitleLines } from "./utils";

async function importHomePage() {
  console.log("Importing Home Page...");

 await writeClient.createOrReplace({
  _id: "homePage",
  _type: "homePage",

  hero: {
    footerText: homePage.hero.footer_Text,
  },

  valueProp: withTitleLines(homePage.valueProp),
  servicesOverview: withTitleLines(homePage.servicesOverview),
  aboutOverview: withTitleLines(homePage.aboutOverview),
  insightsOverview: withTitleLines(homePage.insightsOverview),
  contactFormOverview: withTitleLines(homePage.contactFormOverview),
});

  console.log("✓ Home Page");
  console.log("Done!");
}

importHomePage().catch((err) => {
  console.error("Home page import failed:", err);
  process.exit(1);
});