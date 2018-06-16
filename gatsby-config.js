module.exports = {
    siteMetadata: {
        title: 'Plod - Handy Endurance Resources',
        description: 'Everything ENDURANCE in ONE handy place. No more plodding through hundreds of sites to find what you need...',
        keywords: 'Endurance, Marathons, Ultra, Races, Athlete, Triathlon, Resources'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-nprogress',
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 8,
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#2D7FF9`,
                trickle: false,
                showSpinner: false
            },
        },
    ],
};
