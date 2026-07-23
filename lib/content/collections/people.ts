import { peopleQuery, personBySlugQuery } from "@/sanity/queries/collections/people";
import { client } from "@/sanity/lib/client";
import type { Person } from "@/types/collections/person";

export const getKeyPeople = async () => {
  const team = await getAllPeople();
  return team.filter((person) => person.keyPerson === true);
};

export const getAllPeople = async (): Promise<Person[]>  => {
  return await client.fetch(peopleQuery);
};

export const getPersonBySlug = async (slug: string): Promise<Person | null> => {
  return await client.fetch(personBySlugQuery, { slug });
};
