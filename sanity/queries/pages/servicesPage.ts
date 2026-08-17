export const servicesPageQuery = `
*[_type == "servicesPage"][0] {
  servicesHeader,
  waysOfWorking {
    eyebrow,
    title,
    intro,
    practicesStatement,
    models[] {
      title,
      proposition,
      description,
      capabilities,
      practices[]-> {
        id,
        linkName
      }
    }
  },
  cta
}
`;