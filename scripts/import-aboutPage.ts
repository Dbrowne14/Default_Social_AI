import { writeClient } from "../sanity/lib/writeClient";
import { aboutPage } from "../data/aboutPage";

import { withKeys, withTitleLines } from "./utils";

async function importAboutPage() {
  console.log("Importing About Page...");

  await writeClient.createOrReplace({
    _id: "aboutPage",
    _type: "aboutPage",

    aboutHeader: {
      ...withTitleLines(aboutPage.aboutHeader),
      companyInfo: withKeys(aboutPage.aboutHeader.companyInfo, "company-info"),
    },

    values: {
      ...aboutPage.values,
      statement: withTitleLines({
        title: aboutPage.values.statement,
      }).title,
      body: aboutPage.values.body,
      callout: {
        ...aboutPage.values.callout,
        statement: withTitleLines({
          title: aboutPage.values.callout.statement,
        }).title,
      },
    },

    groupStructure: {
      ...withTitleLines(aboutPage.groupStructure),
      entries: withKeys(aboutPage.groupStructure.entries, "group-entry"),
    },

    approach: {
      ...withTitleLines(aboutPage.approach),
      statement: withTitleLines({
        title: aboutPage.approach.statement,
      }).title,
      principles: withKeys(aboutPage.approach.principles, "principle"),
    },

    team: withTitleLines(aboutPage.team),

    cta: aboutPage.cta,
  });

  console.log("✓ About Page");
  console.log("Done!");
}

importAboutPage().catch((err) => {
  console.error("About page import failed:", err);
  process.exit(1);
});