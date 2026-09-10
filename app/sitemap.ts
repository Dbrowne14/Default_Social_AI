import type { MetadataRoute } from "next";
import { getAllInsights } from "@/lib/content/collections/insights";
import { getAllPeople } from "@/lib/content/collections/people";

const BASE_URL = "https://defaultsocial.co.uk";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [insights, people] = await Promise.all([
    getAllInsights(),
    getAllPeople(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const insightRoutes: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${BASE_URL}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const personRoutes: MetadataRoute.Sitemap = people.map((person) => ({
    url: `${BASE_URL}/about/${person.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...insightRoutes, ...personRoutes];
}
