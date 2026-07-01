// shared types

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
}

export type TitleDescription = {
  title: string;
  description: string;
};

export type TitleSegment = {
  text: string;
  italic?: boolean;
  accent?: boolean;
};

export type TitleLine = {
  segments: TitleSegment[];
};

export type SectionIntro = {
  eyebrow: string;
  title: TitleLine[];
  meta: string;
};

export type PageHeading = {
  eyebrow: string;
  title: TitleLine[];
  lede: string;
};