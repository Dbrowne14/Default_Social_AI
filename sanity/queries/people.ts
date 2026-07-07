export const peopleQuery = `
*[_type == "person"]
| order(id asc)
{
  name,
  intials,
  role,
  title,
  keyPerson,
}
`;

