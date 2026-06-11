import { blogPostProps } from "@/data/blogData";
import Link from "next/link";

const BlogCard = ({ tag, date, author, readTime, title, excerpt, href }: blogPostProps) => {
  const ai = tag === "AI Practice"
  return (
            <article
              className="flex flex-col gap-4.5 pt-6 border-t border-line cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-y-0.5"
              data-cat="seo"
            >
              {" "}
              <div className="aspect-4/3 rounded-[14px] border border-line relative overflow-hidden [background:radial-gradient(circle_at_30%_40%,color-mix(in_oklch,var(--accent)_22%,var(--ink-3)),transparent_60%),repeating-linear-gradient(135deg,var(--ink-2)_0_12px,var(--ink-3)_12px_24px)]">
                <span className={`${ai ? "pill-ai": "pill"} bg-ink absolute top-3.5 left-3.5`}>
                  {ai && ( <span>·</span>)}
                  {tag}
                </span>
                <span className="absolute inset-0 flex items-center justify-center font-serif text-[96px] text-cream opacity-[0.65] tracking-[-0.04em]">
                  ⌬
                </span>
              </div>
              <div className="flex gap-3 font-mono text-[11px] tracking-widest uppercase text-muted">
                <span>By {author}</span>
                <span>·</span>
                <span>{date}</span>
                <span>·</span>
                <span>{readTime}</span>
              </div>
              <h3 className="font-serif text-[26px] leading-[1.15]">
                {title}
              </h3>
              <p className="text-cream-2 text-[15px] leading-normal">
               {excerpt}
              </p>
              <Link href={href} className="font-mono text-[11px] tracking-widest uppercase text-accent mt-auto">
                Read article →
              </Link>
            </article>
  );
};

export default BlogCard;
