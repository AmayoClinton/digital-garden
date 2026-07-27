module.exports = {
  siteMetadata: {
    title: 'Amayo Clinton',
    description: 'Software engineer apprentice at Zone01 Kisumu. I write about Go, Linux, open source, and the decentralized web.',
    siteUrl: 'https://amayoclinton.dev',
    author: 'Amayo Clinton',
    social: {
      github: 'AmayoClinton',
      linkedin: 'amayo-clinton',
      devto: 'amayo_clinton',
      email: 'amayo@example.com',
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'posts', path: `${__dirname}/content/posts` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'notes', path: `${__dirname}/content/notes` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'static', path: `${__dirname}/static` },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: { classPrefix: 'language-', showLineNumbers: false },
          },
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 740, linkImagesToOriginal: false },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `{ site { siteMetadata { title description siteUrl } } }`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map(node => ({
                ...node.frontmatter,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ 'content:encoded': node.html }],
              })),
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  html
                  fields { slug }
                  frontmatter { date title description }
                }
              }
            }`,
            output: '/rss.xml',
            title: 'Amayo Clinton — RSS Feed',
          },
        ],
      },
    },
  ],
}
