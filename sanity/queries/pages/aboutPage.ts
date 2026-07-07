export const aboutPageQuery = `
*[_type == "aboutPage"][0] {
  aboutHeader,
  values,
  groupStructure,
  approach,
  team,
  cta
}
`;