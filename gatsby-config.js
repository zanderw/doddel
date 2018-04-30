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
                baseId: `appEI2RhdstQljbIr`,
                tableName: `Swimming`,
                tableView: `Grid view`,
            }
        }
    ],
};
