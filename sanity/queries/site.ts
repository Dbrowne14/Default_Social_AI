export const siteQuery = `
*[_type=="siteSettings"][0]
{
    siteName,
    siteUrl,
    description,
    groupLink,
    contact,
    footer, 
}
`;


