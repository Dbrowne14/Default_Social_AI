import { homePage } from "@/data/homePage";

export async function getHomePage() {
  return homePage;
}

export const getHeroFooter = async () => {
  return homePage.hero.footer_Text;
};

export const getValueProp = async () => {
  return homePage.valueProp;
};
export const getInsightsOverview = async () => {
  return homePage.insightsOverview;
};

export const getAboutOverview = async () => {
  return homePage.aboutOverview;
};

export const getServicesOverview = async () => {
return homePage.servicesOverview
}