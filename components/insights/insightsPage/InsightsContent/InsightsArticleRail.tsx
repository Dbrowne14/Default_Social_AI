"use client";
import { blogPostProps } from "@/data/blogData";
import { useEffect } from "react";

const InsightsArticleRail = ({
  article,
  section,
  setSection,
}: {
  article: blogPostProps | undefined;
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    if (!article?.sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -65% 0px",
        threshold: 0,
      },
    );

    article.sections.forEach((section) => {
      const el = document.getElementById(section.kicker);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [article, setSection]);
  return (
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
                    href={`#${post.kicker}`}
                    data-target={post.kicker}
                    onClick={() => setSection(post.kicker)}
                    className={`group grid grid-cols-[28px_1fr] items-center gap-3 rounded-xl px-3 py-3 text-[14px] leading-[1.35] transition-colors duration-150 ease-in-out ${
                      selectedTitle
                        ? "bg-[color-mix(in_oklch,var(--accent-2)_8%,transparent)] text-cream"
                        : "text-cream-2 hover:bg-[color-mix(in_oklch,var(--ink-2)_70%,transparent)] hover:text-cream"
                    }`}
                  >
                    <span
                      className={`flex size-6 items-center justify-center rounded-full font-mono text-[10px] tracking-[0.06em] transition-colors duration-150
                            ${
                              selectedTitle
                                ? "bg-accent-2 text-ink [box-shadow:0_0_10px_color-mix(in_oklch,var(--accent-2)_50%,transparent)]"
                                : "text-muted border border-line group-hover:text-cream-2"
                            }`}
                    >
                      {post.kicker === "Conclusion" ? "•" : post.number}
                    </span>

                    <span className="flex items-center gap-3 min-w-0">
                      <span
                        className={`truncate font-mono text-[11px] tracking-[0.12em] uppercase ${
                          selectedTitle
                            ? "text-accent-2"
                            : "text-muted group-hover:text-cream-2"
                        }`}
                      >
                        {post.kicker}
                      </span>

                      <span
                        className={`h-px flex-1 ${
                          selectedTitle
                            ? "[background:linear-gradient(90deg,color-mix(in_oklch,var(--accent-2)_70%,transparent),transparent)]"
                            : "[background:linear-gradient(90deg,var(--line),transparent)]"
                        }`}
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
  );
};

export default InsightsArticleRail;
