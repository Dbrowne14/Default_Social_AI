export const servicesQuery = `
*[_type == "service"]
| order(id asc)
{
  id,
  linkName,
  category,
  title,
  description,
  tags,
  blurb,
  offers,
  aiCallout,
  processSteps,
  featured
}
`;
