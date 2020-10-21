const path = require(`path`)

//VARIABLES ENTORNO
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title:
      "Joan Busquet - Desarrollo web, productividad, emprendimiento y libros",
    titleTemplate: "%s · Joan Busquet",
    description:
      "Joan Busquet. Hablemos de desarrollo web, productividad, Tecnología y Apps, Emprendimiento, Dinero, Libros y mucho más.",
    url: "https://joanbusquet.com", // No trailing slash allowed!
    image: "/assets/images/avatar.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@joanbusquet",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-158913458-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `im37fw8n29tj`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-remark-embedder`,
      options: {
        customTransformers: [
          // Your custom transformers
        ],
        services: {
          // The service-specific options by the name of the service
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joan Busquet`,
        short_name: `Joan Busquet`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog/`],
      },
    },
  ],
}
