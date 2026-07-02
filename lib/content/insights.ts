import { insights } from "@/data/blogData";

export const getAllInsights = async () => {
  return insights;
};

export const getFeaturedInsights = async () => {
  return insights.find((blog) => blog.featured);
};

export const getInsightBySlug = async (slug: string) => {
  return insights.find((post) => post.slug === slug) ?? null;
};
