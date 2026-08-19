export const insightsQuery = `
*[_type=="insight"] 
| order(date asc) 
{
    featured,
    subject,
    date,
    contentType,
    tag,
    allTags,
    readTime, 
    title,
    excerpt,

    author->{
        name,
        "slug": slug.current,
        initials,
        role,
        keyPerson
    },

    "slug": slug.current,

    imageCaption,
    intro,
    pullQuotes,
    sections
}
`;
