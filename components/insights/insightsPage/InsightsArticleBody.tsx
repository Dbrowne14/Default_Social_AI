"use client";
import { insights } from "@/data/blogData";
import { usePathname } from "next/navigation";

const InsightsArticleBody = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const article = insights.filter((post) => post.slug === slug);
  return (
    <div className="pt-12 pb-19 720:pt-18 720:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[minmax(0,1fr)_280px] min-[1080px]:grid-cols-[minmax(0,1fr)_320px] min-[900px]:gap-x-12 min-[1080px]:gap-x-18">
          <article className="text-[17.5px] 720:text-[19px] leading-[1.68] 720:leading-[1.72] text-cream-2 min-[900px]:col-start-1 space-y-7">
            {article?.map((post) => {
              return (
                <>
                  {post.intro?.map((paragraph, index) => {
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
                  {post.pullQuotes?.map((paragraph, index) => {
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
                  {post.sections?.map((paragraph) => {
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
                      {post.allTags?.map((tag, index) => {
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
              );
            })}
          </article>
          <aside className="rail hidden min-[900px]:block min-[900px]:col-start-2">
            <div className="sticky">
              <nav className="toc" aria-label="On this page">
                <div className="lbl">On this page</div>
                <ol>
                  <li>
                    <a href="#s1" data-target="s1">
                      Memory — remember the brief
                    </a>
                  </li>
                  <li>
                    <a href="#s2" data-target="s2">
                      Inventory — what you sell
                    </a>
                  </li>
                  <li>
                    <a href="#s3" data-target="s3">
                      Judgement — qualify and say no
                    </a>
                  </li>
                  <li>
                    <a href="#s4" data-target="s4">
                      Handoff — know when to step back
                    </a>
                  </li>
                  <li>
                    <a href="#s5" data-target="s5">
                      Coda — build the role
                    </a>
                  </li>
                </ol>
              </nav>

              <div className="ai-summary">
                <div className="lbl">AI summary</div>
                <ul>
                  <li>
                    Brief AI as a <em>role</em> (sales engineer), not a feature
                    (chatbot).
                  </li>
                  <li>Four layers: memory, inventory, judgement, handoff.</li>
                  <li>
                    The model never sets price — it decides who's ready to hear
                    it.
                  </li>
                  <li>
                    Measure handoffs with context, not questions deflected.
                  </li>
                </ul>
                <div className="ask">
                  <span className="spark">✺</span>
                  <input
                    placeholder="Ask this article a question…"
                    aria-label="Ask this article"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default InsightsArticleBody;

/*  <aside "rail hidden min-[900px]:block min-[900px]:col-start-2">
          <div class="sticky">
            <nav class="toc" aria-label="On this page">
              <div class="lbl">On this page</div>
              <ol>
                <li><a href="#s1" data-target="s1">Memory — remember the brief</a></li>
                <li><a href="#s2" data-target="s2">Inventory — what you sell</a></li>
                <li><a href="#s3" data-target="s3">Judgement — qualify and say no</a></li>
                <li><a href="#s4" data-target="s4">Handoff — know when to step back</a></li>
                <li><a href="#s5" data-target="s5">Coda — build the role</a></li>
              </ol>
            </nav>

            <div class="ai-summary">
              <div class="lbl">AI summary</div>
              <ul>
                <li>Brief AI as a <em>role</em> (sales engineer), not a feature (chatbot).</li>
                <li>Four layers: memory, inventory, judgement, handoff.</li>
                <li>The model never sets price — it decides who's ready to hear it.</li>
                <li>Measure handoffs with context, not questions deflected.</li>
              </ul>
              <div class="ask">
                <span class="spark">✺</span>
                <input placeholder="Ask this article a question…" aria-label="Ask this article"/>
              </div>
            </div>
          </div>
        </aside>*/
