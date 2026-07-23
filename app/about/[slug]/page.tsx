import TeamMemberHeader from "@/components/about/teamMember/TeamMemberHeader";
import TeamMemberBio from "@/components/about/teamMember/TeamMemberBio";
import TeamMemberWork from "@/components/about/teamMember/TeamMemberWork";
import TeamMemberContact from "@/components/about/teamMember/TeamMemberContact";
import TeamMemberNav from "@/components/about/teamMember/TeamMemberNav";
import { getAllPeople, getPersonBySlug } from "@/lib/content/collections/people";
import { getAllInsights } from "@/lib/content/collections/insights";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export type TeamMemberPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPersonBySlug(slug);

  if (!person) {
    return {
      title: "Person not found",
    };
  }

  const description = person.lede ?? `${person.name} — ${person.role} at Default Social.`;

  return {
    title: person.name,
    description,
    openGraph: {
      title: person.name,
      description,
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: person.name,
      description,
    },
  };
}

const Page = async ({ params }: TeamMemberPageProps) => {
  const { slug } = await params;
  const person = await getPersonBySlug(slug);

  if (!person) {
    notFound();
  }

  const people = await getAllPeople();
  const insights = await getAllInsights();
  const selectedWork = insights.filter(
    (article) => article.author.slug === person.slug,
  );

  return (
    <div data-screen-label="02 About · Team member">
      <TeamMemberHeader person={person} />
      <TeamMemberBio person={person} />
      <TeamMemberWork name={person.name} work={selectedWork} />
      <TeamMemberContact person={person} />
      <TeamMemberNav people={people} currentSlug={person.slug} />
    </div>
  );
};

export default Page;
