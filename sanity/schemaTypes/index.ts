import { type SchemaTypeDefinition } from "sanity";
import {
  service,
  serviceTag,
  serviceCallout,
  serviceOffer,
  serviceProcessStep,
} from "./service";
import { person } from "./person";
import {
  insight,
  insightSection,
  insightTextBlock,
  pullQuote,
} from "./insight";
import {
  linkItem,
  pageCTA,
  pageHeading,
  sectionIntro,
  titleDescription,
  titleLine,
  titleSegment,
} from "./shared";
import { homePage, aboutOverviewSection, homeHero } from "./homePage";
import { groupLink, siteSettings, contactDetails, footerContent } from "./site";
import { servicesPage } from "./servicesPage";
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
} from "./aboutPage";
import { insightsPage } from "./insightsPage";

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
