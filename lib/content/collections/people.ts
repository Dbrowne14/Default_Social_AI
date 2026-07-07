import { peopleQuery } from "@/sanity/queries/collections/people";
import { client } from "@/sanity/lib/client";
import type { Person } from "@/types/collections/person";

export const getKeyPeople = async () => {
  const team = await getAllPeople();
  return team.filter((person) => person.keyPerson === true);
};

export const getAllPeople = async (): Promise<Person[]>  => {
  return await client.fetch(peopleQuery);
};
