"use client";
import { insights } from "@/data/blogData";
import { useState } from "react";
import InsightsArticleProse from "./InsightsArticleProse";
import InsightsArticleRail from "./InsightsArticleRail";

export type InsightsArticleBodyProps = {
  params: {
    slug: string;
  };
};

const InsightsArticleBody = ({ params }: InsightsArticleBodyProps) => {
  const article = insights.find(
    (post) => post.slug === params.slug
  );
  const [section, setSection] = useState("");
  return (
    <div className="pt-12 pb-19 720:pt-18 720:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[minmax(0,1fr)_280px] min-[1080px]:grid-cols-[minmax(0,1fr)_320px] min-[900px]:gap-x-12 min-[1080px]:gap-x-18">
          <InsightsArticleProse article={article} />
          <InsightsArticleRail
            article={article}
            section={section}
            setSection={setSection}
          />
        </div>
      </div>
    </div>
  );
};

export default InsightsArticleBody;
