module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 8,
            },
        },
        {
            resolve: `gatsby-source-airtable`,
            options: {
                apiKey: `key0snq8sdZUavtSO`,
                baseId: `appHa6Jz2dKTD7cGK`,
                tableName: `CMS`,
                tableView: `published`,
            }
        }
    ],
};
