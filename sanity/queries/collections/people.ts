export const peopleQuery = `
*[_type == "person"]
| order(name asc)
{
  name,
  intials,
  role,
  title,
  keyPerson,
}
`;

