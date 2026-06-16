"use client";
import { insights } from "@/data/blogData";
import { usePathname } from "next/navigation";
import { useState } from "react";
import InsightsArticleProse from "./InsightsArticleProse";

const InsightsArticleBody = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const article = insights.find((post) => post.slug === slug);
  const [section, setSection] = useState("");
  return (
    <div className="pt-12 pb-19 720:pt-18 720:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[minmax(0,1fr)_280px] min-[1080px]:grid-cols-[minmax(0,1fr)_320px] min-[900px]:gap-x-12 min-[1080px]:gap-x-18">
         <InsightsArticleProse article={article}/>
          <aside className="grid-cols-1 hidden min-[900px]:block min-[900px]:col-start-2">
            <div className="sticky top-29 flex flex-col gap-7">
              <nav className="toc" aria-label="On this page">
                <div className="flex gap-4 items-baseline">
                  <span className="w-1.5 h-1.5 rounded-[50%] bg-accent-2 [box-shadow:0_0_10px_color-mix(in_oklch,var(--accent-2)_50%,transparent)]"></span>
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted flex items-center gap-2 mb-4">
                    On this page
                  </div>
                </div>
                <ol className="list-none m-0 p-2 flex flex-col gap-1 rounded-2xl  backdrop-blur-[14px]">
                  {article?.sections?.map((post) => {
                    const selectedTitle = section === post.kicker;

                    return (
                      <li key={post.kicker}>
                        <a
                          href={`#s${post.number}`}
                          data-target={post.kicker}
                          onClick={() => setSection(post.kicker)}
                          className={`
            group grid grid-cols-[28px_1fr] items-center gap-3
            rounded-xl px-3 py-3
            text-[14px] leading-[1.35]
            transition-colors duration-150 ease-in-out
            ${
              selectedTitle
                ? "bg-[color-mix(in_oklch,var(--accent-2)_8%,transparent)] text-cream"
                : "text-cream-2 hover:bg-[color-mix(in_oklch,var(--ink-2)_70%,transparent)] hover:text-cream"
            }
          `}
                        >
                          <span
                            className={`
              flex size-6 items-center justify-center rounded-full
              font-mono text-[10px] tracking-[0.06em]
              transition-colors duration-150
              ${
                selectedTitle
                  ? "bg-accent-2 text-ink [box-shadow:0_0_10px_color-mix(in_oklch,var(--accent-2)_50%,transparent)]"
                  : "text-muted border border-line group-hover:text-cream-2"
              }
            `}
                          >
                            {post.kicker === "Conclusion" ? "•" : post.number}
                          </span>

                          <span className="flex items-center gap-3 min-w-0">
                            <span
                              className={`
                truncate font-mono text-[11px] tracking-[0.12em] uppercase
                ${
                  selectedTitle
                    ? "text-accent-2"
                    : "text-muted group-hover:text-cream-2"
                }
              `}
                            >
                              {post.kicker}
                            </span>

                            <span
                              className={`
                h-px flex-1
                ${
                  selectedTitle
                    ? "[background:linear-gradient(90deg,color-mix(in_oklch,var(--accent-2)_70%,transparent),transparent)]"
                    : "[background:linear-gradient(90deg,var(--line),transparent)]"
                }
              `}
                            />
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default InsightsArticleBody;

