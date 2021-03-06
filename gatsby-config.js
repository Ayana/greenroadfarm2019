module.exports = {
  siteMetadata: {
    title: `グリーンロードファーム`,
    description: `グリーンロードファーム（GreenRoadFarm）は、旬の味と自然を満喫できる信州・松本のフルーツ農園です。`,
    siteUrl: `https://greenroadfarm.org/`,
    image: `/images/img_ogp.png`,
    author: `Ayaos`,
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M66T3FP",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    // {
    //   resolve: 'gatsby-source-googlemaps-geocoding',
    //   options: {
    //     // key: 'AIzaSyCsKwpWIDGkUZ2_Dfd39JkYuHXTjE5f8CE',
    //     // address: '1036 Okadashimookada, Matsumoto, Nagano 390-0313, Japan'
    //     key: process.env.AIzaSyCsKwpWIDGkUZ2_Dfd39JkYuHXTjE5f8CE,
    //     address: `Boston, MA`
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
  ],
}
