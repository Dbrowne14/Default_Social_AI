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

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
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
