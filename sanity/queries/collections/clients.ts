export const clientsQuery = `
*[_type == "client"] | order(order asc) {
  name,
  logo,
  url,
  sector,
  order
}
`;
