import { writeClient } from "../sanity/lib/writeClient";
import { team as people } from "@/data/peopleData";

async function importPeople() {
  console.log(`Importing ${people.length} people...`);

  for (const person of people) {
    await writeClient.createOrReplace({
      _id: `person-${person.initials.toLowerCase()}`,
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