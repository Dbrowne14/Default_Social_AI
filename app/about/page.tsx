import AboutHeader from "@/components/about/AboutHeader";
import AboutValues from "@/components/about/AboutValues";
import AboutGroupStructure from "@/components/about/AboutGroupStructure";
import AboutApproach from "@/components/about/AboutApproach";

const Page = () => {
  return (
    <div data-screen-label="02 About">
      <AboutHeader />
      <AboutValues />
      <AboutGroupStructure />
      <AboutApproach />
    </div>
  );
};

export default Page;
