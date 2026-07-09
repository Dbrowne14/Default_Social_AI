import type { Insight } from "@/types/collections/insights";

export type ActiveFilterProps = {
  isActive: string;
};

export type InsightsProps = {
  insights: Insight[];
};

export type ActiveFilterSetterProps = {
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
};

export type BlogStateProps = ActiveFilterProps & {
  showMore: number;
};

export type InsightBlogPostsProps = InsightsProps & ActiveFilterProps;

export type BlogPostProps = BlogStateProps & InsightsProps;
