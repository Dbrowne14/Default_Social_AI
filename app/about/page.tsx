import AboutHeader from "@/components/about/AboutHeader";
import AboutValues from "@/components/about/AboutValues";
import AboutGroupStructure from "@/components/about/AboutGroupStructure";
import AboutApproach from "@/components/about/AboutApproach";
import AboutTeam from "@/components/about/AboutTeam";
import CTA from "@/components/ui/Cta";

const Page = () => {
  return (
    <div data-screen-label="02 About">
      <AboutHeader />
      <AboutValues />
      <AboutGroupStructure />
      <AboutApproach />
      <AboutTeam/>
      <CTA primaryText="Want to see what we'd" secondaryText="build for you?" buttonLink="/services" buttonText="See services"/>
    </div>
  );
};

export default Page;
