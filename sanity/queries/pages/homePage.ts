export const homePageQuery = `
*[_type == "homePage"][0] {
  hero,
  valueProp,
  servicesOverview,
  aboutOverview,
  insightsOverview,
  contactFormOverview
}
`;