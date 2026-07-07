export const insightsQuery = `
*[_type=="insight"] 
| order(date asc) 
{
    featured,
    subject,
    date,
    tag,
    allTags,
    readTime, 
    title,
    excerpt,

    author->{
        name,
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
