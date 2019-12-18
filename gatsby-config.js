module.exports = {
  siteMetadata: {
    title: 'Pedro Henrick',
    author: '@pedrohenrickcs',
    siteUrl: 'https://pedrohenrickcs.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      }, 
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-154475129-1",
        anonymize: true,
        respectDNT: true,
      }
    },
  ],
};
