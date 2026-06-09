import AboutHeader from "@/components/about/AboutHeader";
import AboutValues from "@/components/about/AboutValues";
import AboutGroupStructure from "@/components/about/AboutGroupStructure";
import AboutApproach from "@/components/about/AboutApproach";
import AboutTeam from "@/components/about/AboutTeam";

const Page = () => {
  return (
    <div data-screen-label="02 About">
      <AboutHeader />
      <AboutValues />
      <AboutGroupStructure />
      <AboutApproach />
      <AboutTeam/>
    </div>
  );
};

export default Page;
