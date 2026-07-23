export const peopleQuery = `
*[_type == "person"] | order(order asc) {
  name,
  "slug": slug.current,
  initials,
  role,
  photo,
  keyPerson,
  order
}
`;

export const personBySlugQuery = `
*[_type == "person" && slug.current == $slug][0] {
  name,
  "slug": slug.current,
  initials,
  role,
  photo,
  keyPerson,
  order,
  pronouns,
  focusArea,
  discipline,
  location,
  joinedYear,
  lede,
  bioHeading,
  bioParagraphs,
  expertise,
  quote,
  email,
  linkedin
}
`;
