import AboutHeader from "@/components/about/AboutHeader";
import AboutValues from "@/components/about/AboutValues";
import AboutGroupStructure from "@/components/about/AboutGroupStructure";
import AboutApproach from "@/components/about/AboutApproach";
import AboutTeam from "@/components/about/AboutTeam";
import CTA from "@/components/ui/Cta";
import type { Metadata } from "next";
import { getAboutPage } from "@/lib/content/aboutPage";
import { getAllPeople } from "@/lib/content/people";

export const metadata: Metadata = {
  title: "About",
  description:
    "Default Social is the AI-native, digital, social and technology studio from Default Media Group, combining strategy, data and craft from London.",
};

const Page = async () => {
  const aboutPage = await getAboutPage();
  const people = await getAllPeople();
  const { primaryText, secondaryText, button } = aboutPage.cta;

  return (
    <div data-screen-label="02 About">
      <AboutHeader aboutHeader={aboutPage.aboutHeader} />
      <AboutValues values={aboutPage.values} />
      <AboutGroupStructure groupStructure={aboutPage.groupStructure} />
      <AboutApproach approach={aboutPage.approach} />
      <AboutTeam people={people} aboutHeader={aboutPage.team} />
      <CTA
        primaryText={primaryText}
        secondaryText={secondaryText}
        buttonLink={button.href}
        buttonText={button.label}
      />
    </div>
  );
};

export default Page;
