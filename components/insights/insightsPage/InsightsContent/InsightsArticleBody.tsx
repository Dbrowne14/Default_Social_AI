"use client";
import { insights } from "@/data/blogData";
import { usePathname } from "next/navigation";
import { useState } from "react";
import InsightsArticleProse from "./InsightsArticleProse";
import InsightsArticleRail from "./InsightsArticleRail";

const InsightsArticleBody = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const article = insights.find((post) => post.slug === slug);
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
          <section data-screen-label="Related reading">
            <div className="container">
              <div className="section-head mb-6">
                <div className="title-block">
                  <div className="eyebrow">Keep reading</div>
                  <h2>Related field notes.</h2>
                </div>
                <p className="meta">
                  More from the AI practice — the patterns behind the concierge,
                  and where the value actually sits.
                </p>
              </div>

              <div className="related-grid">
                <a className="article" href="insights-article.html">
                  <div className="thumb t-3">
                    <span className="pill ai tag">AI Practice</span>
                    <span className="glyph">◊</span>
                  </div>
                  <div className="meta">
                    <span>Robin McGlashan</span>
                    <span>·</span>
                    <span>Feb 2026</span>
                    <span>·</span>
                    <span>8 min</span>
                  </div>
                  <h3 className="serif">
                    The four AI layers every brand site should plan for.
                  </h3>
                  <p className="ex">
                    Experience, content, growth, analytics — and why "AI
                    chatbot" usually only covers a quarter of the value.
                  </p>
                  <span className="read">Read article →</span>
                </a>

                <a className="article" href="insights-article.html">
                  <div className="thumb t-1">
                    <span className="pill ai tag">AI Practice</span>
                    <span className="glyph">⌁</span>
                  </div>
                  <div className="meta">
                    <span>David Browne</span>
                    <span>·</span>
                    <span>Mar 2026</span>
                    <span>·</span>
                    <span>9 min</span>
                  </div>
                  <h3 className="serif">
                    Personalisation without the creep factor.
                  </h3>
                  <p className="ex">
                    A working pattern for first-party personalisation that
                    improves the experience without spooking the user — or the
                    regulator.
                  </p>
                  <span className="read">Read article →</span>
                </a>

                <a className="article" href="insights-article.html">
                  <div className="thumb t-6">
                    <span className="pill tag bg-ink border-line">
                      Studio Ops
                    </span>
                    <span className="glyph">⌘</span>
                  </div>
                  <div className="meta">
                    <span>David Browne</span>
                    <span>·</span>
                    <span>Feb 2026</span>
                    <span>·</span>
                    <span>5 min</span>
                  </div>
                  <h3 className="serif">
                    Why our discovery is one week, not four.
                  </h3>
                  <p className="ex">
                    What we cut to compress discovery without losing the
                    strategic depth — and the one document we'd never skip.
                  </p>
                  <span className="read">Read article →</span>
                </a>
              </div>

              <div className="display: flex; justify-content: center; margin-top: 56px;">
                <a className="btn ghost" href="insights.html">
                  All insights <span className="arr">→</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InsightsArticleBody;
