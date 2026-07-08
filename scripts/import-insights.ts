import { writeClient } from "../sanity/lib/writeClient";
import { insights } from "@/data/insightsData";
import { toDocumentId } from "./utils";


const authorIdFromName = (name: string) => `person-${toDocumentId(name)}`;

const toSanityDate = (date: string) => {
  const normalised = date.replace("Apr ", "April ");
  const parsed = new Date(`1 ${normalised}`);

  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid date: ${date}`);
  }

  return parsed.toISOString().slice(0, 10);
};

async function importInsights() {
  console.log(`Importing ${insights.length} insights...`);

  for (const insight of insights) {
    await writeClient.createOrReplace({
      _id: `insight-${insight.slug}`,
      _type: "insight",

      ...insight,

      featured: insight.featured ?? false,
      subject: insight.subject ?? "",
      allTags: insight.allTags ?? [insight.tag],
      date: toSanityDate(insight.date),

      slug: {
        _type: "slug",
        current: insight.slug,
      },

      author: {
        _type: "reference",
        _ref: authorIdFromName(insight.author.name),
      },

      intro: insight.intro?.map((block, index) => ({
        _key: `intro-${index}`,
        ...block,
      })),

      pullQuotes: insight.pullQuotes?.map((quote, index) => ({
        _key: `quote-${index}`,
        ...quote,
      })),

      sections: insight.sections?.map((section, sectionIndex) => ({
        _key: `section-${section.number ?? sectionIndex}`,
        ...section,
        paragraphs: section.paragraphs.map((paragraph, paragraphIndex) => ({
          _key: `paragraph-${sectionIndex}-${paragraphIndex}`,
          ...paragraph,
        })),
      })),
    });

    console.log(`✓ ${insight.title}`);
  }

  console.log("Done!");
}

importInsights().catch((err) => {
  console.error("Insights import failed:", err);
  process.exit(1);
});