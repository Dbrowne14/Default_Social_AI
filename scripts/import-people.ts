import { writeClient } from "../sanity/lib/writeClient";
import { team as people } from "@/data/peopleData";

const toDocumentId = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

async function importPeople() {
  console.log(`Importing ${people.length} people...`);

  for (const person of people) {
  if (person.initials === "+") continue;

  await writeClient.createOrReplace({
    _id: `person-${toDocumentId(person.name)}`,
    _type: "person",
    ...person,
    keyPerson: person.keyPerson ?? false,
  });

  console.log(`✓ ${person.name}`);
}

  console.log("Done!");
}

importPeople().catch((err) => {
  console.error("People import failed:", err);
  process.exit(1);
});