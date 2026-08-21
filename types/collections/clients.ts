export type Client = {
  name: string;
  // Resolved image URL — either a local /assets path (lib/clients.ts reference
  // data) or a Sanity image resolved via urlFor() in lib/content/collections/clients.ts.
  logo: string;
  url?: string;
  sector?: string;
  order?: number;
  // Legacy flag from the local-only reference data (lib/clients.ts). Not part
  // of the Sanity client schema; kept optional here so that file still type-checks.
  dummy?: boolean;
};