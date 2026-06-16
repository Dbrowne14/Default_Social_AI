"use client";
import { insights } from "@/data/blogData";
import { usePathname } from "next/navigation";
import { useState } from "react";

const InsightsArticleBody = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const article = insights.find((post) => post.slug === slug);
  const [section, setSection] = useState("");
  return (
    <div className="pt-12 pb-19 720:pt-18 720:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[minmax(0,1fr)_280px] min-[1080px]:grid-cols-[minmax(0,1fr)_320px] min-[900px]:gap-x-12 min-[1080px]:gap-x-18">
          <article className="text-[17.5px] 720:text-[19px] leading-[1.68] 720:leading-[1.72] text-cream-2 min-[900px]:col-start-1 space-y-7">
            {article && (
              <>
                {article.intro?.map((paragraph, index) => {
                  if ("superText" in paragraph) {
                    return (
                      <p
                        key={index}
                        className="text-[19px] leading-[1.6] text-cream 720:text-[21px] first-letter:float-left first-letter:font-serif first-letter:text-[72px] first-letter:leading-[0.72] first-letter:pr-2.5 first-letter:pt-1.5 first-letter:text-accent 720:first-letter:text-[88px] 720:first-letter:pr-3.5 720:first-letter:pt-2 max-w-[74ch]"
                      >
                        {paragraph.superText}
                      </p>
                    );
                  }

                  return (
                    <p key={index} className="max-w-[74ch]">
                      {paragraph.text}
                    </p>
                  );
                })}
                {article.pullQuotes?.map((paragraph, index) => {
                  return (
                    <div
                      className="max-w-full my-14 p-0 border-none"
                      key={index}
                    >
                      <p className="max-w-[22ch] font-serif text-[clamp(30px,4vw,46px)] leading-[1.12] tracking-[-0.015em] text-cream">
                        {paragraph.quote}
                      </p>

                      <cite className="block mt-6 font-mono text-[11px] tracking-widest uppercase text-accent-deep font-normal">
                        {paragraph.cite}
                      </cite>
                    </div>
                  );
                })}
                {article.sections?.map((paragraph) => {
                  return (
                    <>
                      <div
                        className="flex items-center gap-4.5 mt-21 scroll-mt-25"
                        id={`s${paragraph.number}`}
                      >
                        {paragraph.kicker === "Conclusion" ? (
                          <span className="block w-3.5 h-3.5 rounded-[50%] bg-accent-2 [box-shadow:0_0_14px_color-mix(in_oklch,var(--accent-2)_55%,transparent)]"></span>
                        ) : (
                          <span className="font-serif text-[clamp(40px,4.6vw,56px)] leading-[0.8] text-accent tracking-[-0.02em] shrink-0">
                            {paragraph.number}
                          </span>
                        )}
                        <span className="font-mono text-[12px] tracking-[0.18em] uppercase text-muted shrink-0">
                          {paragraph.kicker}
                        </span>
                        <span className="flex-1 h-px [background:linear-gradient(90deg,var(--line),color-mix(in_oklch,var(--line)_30%,transparent))]"></span>
                      </div>
                      <h2 className="text-[clamp(28px,3.4vw,40px)] leading-[1.08] text-cream mt-5.5 max-w-[20ch]">
                        {paragraph.title}
                      </h2>
                      {paragraph.paragraphs.map((paragraph, index) => {
                        return <p key={index}>{paragraph.text}</p>;
                      })}
                    </>
                  );
                })}
                <div className="max-w-full m-0">
                  <div className="flex gap-2 flex-wrap mt-9 pt-7 border-t border-line">
                    {article.allTags?.map((tag, index) => {
                      return (
                        <span
                          className={`${tag === "AI Practice" ? "pill-ai" : "pill"}`}
                          key={index}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
            ;
          </article>
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

