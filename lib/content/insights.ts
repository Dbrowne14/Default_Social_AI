import { insights } from "@/data/blogData";

export const getAllInsights = async () => {
  return insights;
};

export const getFeaturedInsights = async () => {
  return insights.find((blog) => blog.featured);
};
