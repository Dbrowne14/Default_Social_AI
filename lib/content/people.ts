import { team } from "@/data/teamData";

export const getKeyPeople = async () => {
  return team.filter((person) => person.keyPerson === true);
};

export const getAllPeople = async () => {
  return team;
};
