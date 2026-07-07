
export const servicesQuery = `
*[_type == "service"]
| order(id asc)
{
  id,
  linkName,
  category,
  title,
  description,
  blurb,
  tags,
  featured,
  offers,
  aiCallout,
  processSteps
}
`;