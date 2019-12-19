module.exports = {
  siteMetadata: {
    title: `BackRoads`,
    description: `Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure.`,
    author: `@john_doe`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
