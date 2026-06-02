type BlogCardProps = {
  tag: string;
  date: string;
  author: string;
  readTime: string;
  title: string;
  description: string;
  href: string;
};

const BlogCard = ({ tag, date, author, readTime, title, description, href }: BlogCardProps) => {
  return (
    <article className="flex flex-col gap-4 pt-6 border-t border-line">
      <div className="aspect-4/3 rounded-[10px] border border-line relative overflow-hidden bg-[repeating-linear-gradient(135deg,var(--ink-2)_0_12px,var(--ink-3)_12px_24px)]">
        <span className="pill absolute top-3 left-3 bg-ink border border-line">
          {tag}
        </span>
      </div>
      <div className="meta flex gap-3 font-mono text-[11px] tracking-widest uppercase text-muted">
        {date} · {readTime}
      </div>
      <h3 className="font-serif text-[26px]">
        {title}
      </h3>
      <p className="text-cream-2 text-[15px]">
        {description}
      </p>
      <a className="font-mono text-accent" href={href}>
        Read article →
      </a>
    </article>
  );
};

export default BlogCard;
