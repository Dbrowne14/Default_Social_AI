//types for person data schema
import type { Image } from "sanity";

export type Person = {
  slug: string;
  initials: string;
  name: string;
  role: string;
  keyPerson?: boolean;
  photo?: Image;

  pronouns?: string;
  focusArea?: string;
  discipline?: string;
  location?: string;
  joinedYear?: string;
  lede?: string;
  bioHeading?: string;
  bioParagraphs?: string[];
  expertise?: string[];
  email?: string;
  linkedin?: string;
};
