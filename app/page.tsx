import Hero from "@/components/home/Hero/Hero";
import MarqueeTicker from "@/components/home/marqueeTicker/MarqueeTicker";
import ValueProp from "@/components/home/ValueProp";
import ClientLogoTicker from "@/components/home/ClientLogoTicker";
import ServicesOverview from "@/components/home/servicesOverview/ServicesOverview";
import AboutOverview from "@/components/home/AboutOverview";
import InsightsOverview from "@/components/home/InsightsOverview";
import ContactForm from "@/components/home/contact/ContactForm";
import { getHomePage } from "@/lib/content/pages/homePage";
import { getKeyPeople } from "@/lib/content/collections/people";
import { getSiteSettings } from "@/lib/content/site";

export default async function Home() {
  const homePage = await getHomePage();
  const feauturedPeople = await getKeyPeople();
  const siteSettings = await getSiteSettings();

  return (
    <>
      <Hero hero={homePage.hero} />
      <MarqueeTicker />
      <ValueProp valueProp={homePage.valueProp} />
      <ClientLogoTicker />
      <ServicesOverview section={homePage.servicesOverview} />
      <AboutOverview
        section={homePage.aboutOverview}
        featuredPeople={feauturedPeople}
      />
      <InsightsOverview section={homePage.insightsOverview} />
      <ContactForm
        section={homePage.contactFormOverview}
        siteSettings={siteSettings}
      />
    </>
  );
}
