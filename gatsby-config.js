module.exports = {
    siteMetadata: {
        title: 'Doddel - Handy Endurance Resources',
        description: 'Gifted by the world\'s most generous community of Doddel athletes who love to run, swim and cycle together. Whatever the weather!',
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
