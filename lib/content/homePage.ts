import { homePage } from "@/data/homePage";

export const getHeroFooter = async () => {
  return homePage.hero.footer_Text;
};

export const getValueProp = async () => {
  return homePage.valueProp;
};
export const getInsightsOverview = async () => {
  return homePage.insightsOverview;
};

export const getAboutOVerview = async () => {
  return homePage.aboutOverview;
};
