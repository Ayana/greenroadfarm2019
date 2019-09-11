module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-googlemaps-geocoding',
      options: {
        // key: 'AIzaSyCsKwpWIDGkUZ2_Dfd39JkYuHXTjE5f8CE',
        // address: '1036 Okadashimookada, Matsumoto, Nagano 390-0313, Japan'
        key: process.env.AIzaSyCsKwpWIDGkUZ2_Dfd39JkYuHXTjE5f8CE,
        address: `Boston, MA`
      },
    }
  ],
}
