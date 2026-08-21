import type { Client } from "@/types/collections/clients";

// MIGRATION REFERENCE / TEMPORARY FALLBACK — client content now lives in
// Sanity (see sanity/schemaTypes/collections/client.ts and
// lib/content/collections/clients.ts). This file is kept temporarily so its
// content can be manually transcribed into Sanity Studio, and is used as a
// runtime fallback by getAllClients() only while no client documents exist
// in Sanity yet. Do not delete until Studio content has been populated and
// verified — removal should happen only when explicitly requested.
export const clients: Client[] = [
  {
    name: "brackenwave.io",
    logo: "/assets/logos/brackenwave-io.svg",
    url: "",
    sector: "",
    dummy: true,
  },
  {
    name: "Halycon Systems",
    logo: "/assets/logos/halycon-systems.svg",
    url: "",
    sector: "",
    dummy: true,
  },
  {
    name: "Kestel Index",
    logo: "/assets/logos/kestrel-index.svg",
    url: "",
    sector: "",
    dummy: true,
  },
  {
    name: "Sable & Crow",
    logo: "/assets/logos/sable-crowe.svg",
    url: "",
    sector: "",
    dummy: true,
  },
  {
    name: "Thornbury Labs",
    logo: "/assets/logos/thornbury-labs.svg",
    url: "",
    sector: "",
    dummy: true,
  },
  {
    name: "Voltmere",
    logo: "/assets/logos/voltmere.svg",
    url: "",
    sector: "",
    dummy: true,
  },
];
