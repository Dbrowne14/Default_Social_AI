import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem().schemaType("homePage").title("Home Page"),
      S.documentListItem().schemaType("servicesPage").title("Services Page"),
      S.documentListItem().schemaType("aboutPage").title("About Page"),
      S.documentListItem().schemaType("insightsPage").title("Insights Page"),

      S.divider(),

      S.documentTypeListItem("service"),
      S.documentTypeListItem("insight"),
      S.documentTypeListItem("person"),

      S.divider(),

      S.documentListItem().schemaType("siteSettings").title("Site Settings"),
    ]);
