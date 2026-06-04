import Hero from "@/components/home/Hero/Hero";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import ValueProp from "@/components/home/ValueProp";
import ClientLogoTicker from "@/components/home/ClientLogoTicker";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutOverview from "@/components/home/AboutOverview";
import InsightsOverview from "@/components/home/InsightsOverview";

import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div>
      {/*---complete later---*/}
      <Hero />
      <MarqueeTicker />
      <ValueProp />
      <ClientLogoTicker />
      <ServicesOverview />
      <AboutOverview />
      <InsightsOverview />
      <ContactForm />
    </div>
  );
}
