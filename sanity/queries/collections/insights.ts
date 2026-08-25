export const insightsQuery = `
*[_type=="insight"] 
| order(date desc) 
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

    image {
        ...,
        alt
    },


    imageCaption,
    intro,
    pullQuotes,
    sections
}
`;
