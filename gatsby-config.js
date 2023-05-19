module.exports = {
  siteMetadata: {
    title: 'Dr. Mobilo Aquafest 2023'
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-WFL5VZKCXW'],
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ['/outils/**']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WDBX66G',
        defaultDataLayer: { platform: 'gatsby' },
        enableWebVitalsTracking: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'media'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/img/sub-icon.png',
        lang: 'fr-CA',
        background: '#0a1113',
        theme_color: '#0a1113'
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components'
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Arvo`]
      }
    }
  ]
};
