import { defineLive } from "next-sanity/live";
import { client } from "./client";

const token = process.env.SANITY_API_READ_TOKEN;
console.log("TOKEN EXISTS:", Boolean(process.env.SANITY_API_READ_TOKEN));
if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "2026-02-01",
  }),
  serverToken: token,
  browserToken: token,
});