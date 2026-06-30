import Hero from "@/components/home/Hero/Hero";
import MarqueeTicker from "@/components/home/marqueeTicker/MarqueeTicker";
import ValueProp from "@/components/home/ValueProp";
import ClientLogoTicker from "@/components/home/ClientLogoTicker";
import ServicesOverview from "@/components/home/servicesOverview/ServicesOverview";
import AboutOverview from "@/components/home/AboutOverview";
import InsightsOverview from "@/components/home/InsightsOverview";
import ContactForm from "@/components/home/contact/ContactForm";
import { getHomePage } from "@/lib/content/homePage";
import { getKeyPeople } from "@/lib/content/people";

export default async function Home() {
  const homePage = await getHomePage();
  const feauturedPeople = await getKeyPeople()
  return (
    <>
      <Hero hero={homePage.hero} />
      <MarqueeTicker />
      <ValueProp valueProp={homePage.valueProp} />
      <ClientLogoTicker />
      <ServicesOverview section={homePage.servicesOverview} />
      <AboutOverview section={homePage.aboutOverview} featuredPeople={feauturedPeople}/>
      <InsightsOverview section={homePage.insightsOverview} />
      <ContactForm />
    </>
  );
}
