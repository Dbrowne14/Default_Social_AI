import type {
  Insight,
  InsightContentType,
} from "@/types/collections/insights";

export const getInsightContentType = (
  insight: Insight,
): InsightContentType => insight.contentType ?? "article";

export const INSIGHT_CONTENT_TYPE_LABEL: Record<
  InsightContentType,
  string
> = {
  article: "Article",
  caseStudy: "Case Study",
};