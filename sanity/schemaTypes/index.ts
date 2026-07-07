import { type SchemaTypeDefinition } from "sanity";
import {
  service,
  serviceTag,
  serviceCallout,
  serviceOffer,
  serviceProcessStep,
} from "./collections/service";
import { person } from "./collections/person";
import {
  insight,
  insightSection,
  insightTextBlock,
  pullQuote,
} from "./collections/insight";
import {
  linkItem,
  pageCTA,
  pageHeading,
  sectionIntro,
  titleDescription,
  titleLine,
  titleSegment,
} from "./shared";
import { homePage, aboutOverviewSection, homeHero } from "./pages/homePage";
import { groupLink, siteSettings, contactDetails, footerContent } from "./site";
import { servicesPage } from "./pages/servicesPage";
import {
  aboutHeader,
  aboutPage,
  approachPrinciple,
  approachSection,
  companyInformation,
  groupStructureEntry,
  groupStructureSection,
  valuesCallout,
  valuesSection,
} from "./pages/aboutPage";
import { insightsPage } from "./pages/insightsPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    linkItem,
    titleDescription,
    titleSegment,
    titleLine,
    sectionIntro,
    pageHeading,
    pageCTA,
    service,
    serviceTag,
    serviceCallout,
    serviceOffer,
    serviceProcessStep,
    person,
    insight,
    insightSection,
    insightTextBlock,
    pullQuote,
    groupLink,
    siteSettings,
    contactDetails,
    footerContent,
    homePage,
    aboutOverviewSection,
    homeHero,
    servicesPage,
    aboutHeader,
    aboutPage,
    approachPrinciple,
    approachSection,
    companyInformation,
    groupStructureEntry,
    groupStructureSection,
    valuesCallout,
    valuesSection,
    insightsPage,
  ],
};
