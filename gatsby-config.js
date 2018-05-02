module.exports = {
    siteMetadata: {
        title: 'Waddl',
        description: 'Endurance resources gifted by the most generous community of athletes',
        image: '../assets/images/waddl_meta.png'
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
