export type BlogPostProps = {
  featured?: boolean;
  subject?: string;
  date: string;
  tag: string;
  allTags?: string[];
  readTime: string;
  title: string;
  excerpt?: string;
  authorInitials?: string;
  author: string;
  authorRole?: string;
  slug: string;
  imageCaption?: string;
  intro?: Text[];
  pullQuotes?: PullQuotes[];
  sections?: SectionProps[];
};

type Text = {
  text?: string;
  superText?: string;
};

type PullQuotes = {
  quote?: string;
  cite?: string;
};

type SectionProps = {
  number: string;
  kicker: string;
  title: string;
  paragraphs: Text[];
};

export type ArticleProps = {
  article: BlogPostProps;
};







