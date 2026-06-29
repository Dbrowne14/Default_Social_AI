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

export type ActiveProps = {
  isActive: string;
};

export type ActiveSetterProps = {
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
};





export type ServiceTypeProps = {
  id: string;
  linkName: string;
  category: string;
  title: string[];
  description: string;
  blurb: string;
  tags: { label: string; ai?: boolean }[];
  featured?: boolean;
  offers: ServiceOffers[];
  aiCallout: ServiceOffers;
  process: ServiceProcess[];
};

export type ServiceOffers = {
  title: string;
  description: string;
};

export type ServiceProcess = ServiceOffers & {
  id: string;
};