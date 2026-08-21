import { clientsQuery } from "@/sanity/queries/collections/clients";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { clients as fallbackClients } from "@/lib/clients";
import { SANITY_FETCH_OPTIONS } from "@/sanity/lib/fetchOptions";
import type { Client } from "@/types/collections/clients";
import type { Image as SanityImage } from "sanity";

type SanityClientDoc = {
  name: string;
  logo: SanityImage;
  url?: string;
  sector?: string;
  order?: number;
};

export const getAllClients = async (): Promise<Client[]> => {
  const docs = await client.fetch<SanityClientDoc[]>(clientsQuery, {}, SANITY_FETCH_OPTIONS);

  if (!docs || docs.length === 0) {
    // Temporary migration fallback: Sanity has no published client documents
    // yet. Once Studio is populated this branch simply stops triggering —
    // safe to delete alongside lib/clients.ts once that happens.
    return fallbackClients;
  }

  return docs
    .filter((doc) => Boolean(doc.logo))
    .map((doc) => ({
      name: doc.name,
      logo: urlFor(doc.logo).width(500).fit("max").url(),
      url: doc.url,
      sector: doc.sector,
      order: doc.order,
    }));
};
