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
  ],
};
