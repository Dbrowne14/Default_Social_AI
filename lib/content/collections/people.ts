import "server-only";

import {
  peopleQuery,
  personBySlugQuery,
} from "@/sanity/queries/collections/people";

import { sanityFetch } from "@/sanity/lib/live";

import type { Person } from "@/types/collections/person";

export const getAllPeople = async (): Promise<Person[]> => {
  const { data } = await sanityFetch({
    query: peopleQuery,
  } as const);

  return data as Person[];
};

export const getKeyPeople = async (): Promise<Person[]> => {
  const team = await getAllPeople();

  return team.filter((person) => person.keyPerson === true);
};

export const getPersonBySlug = async (
  slug: string,
): Promise<Person | null> => {
  const { data } = await sanityFetch({
    query: personBySlugQuery,
    params: { slug },
  } as const);

  return data as Person | null;
};