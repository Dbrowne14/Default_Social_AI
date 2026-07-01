import AboutHeader from "@/components/about/AboutHeader";
import AboutValues from "@/components/about/AboutValues";
import AboutGroupStructure from "@/components/about/AboutGroupStructure";
import AboutApproach from "@/components/about/AboutApproach";
import AboutTeam from "@/components/about/AboutTeam";
import CTA from "@/components/ui/Cta";
import type { Metadata } from "next";
import { getAboutPage } from "@/lib/content/aboutPage";


export const metadata: Metadata = {
  title: "About",
  description:
    "Default Social is the AI-native, digital, social and technology studio from Default Media Group, combining strategy, data and craft from London.",
};

const Page = async() => {
  const aboutPage = await getAboutPage()
  
  return (
    <div data-screen-label="02 About">
      <AboutHeader aboutHeader={aboutPage.aboutHeader}/>
      <AboutValues values={aboutPage.values}/>
      <AboutGroupStructure />
      <AboutApproach />
      <AboutTeam/>
      <CTA primaryText="Want to see what we'd" secondaryText="build for you?" buttonLink="/services" buttonText="See services"/>
    </div>
  );
};

export default Page;
