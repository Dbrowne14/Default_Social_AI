import { type SchemaTypeDefinition } from 'sanity'
import {service, serviceTag, serviceCallout, serviceOffer, serviceProcessStep } from './service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, serviceTag, serviceCallout, serviceOffer, serviceProcessStep],
}
