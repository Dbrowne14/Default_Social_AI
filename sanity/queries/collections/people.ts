export const peopleQuery = `
*[_type == "person"] | order(order asc) {
  name,
  initials,
  role,
  keyPerson,
  order
}
`;
