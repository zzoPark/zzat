// Use variables from .env file
require('dotenv').config()

// Use vuetify javascript color pack
const colors = require('vuetify/es5/util/colors').default

module.exports = {
  
  // Server-side rendering + client-side navigation
  mode: 'universal',

  // Set default HTML Head tags
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Server-side middlewares (run before vue-server-renderer)
  serverMiddleware: [{ path: '/api', handler: '~/api' }],

  // Set loading progress bar
  loading: { color: '#fff' },

  plugins: [ '~/plugins/head.js', '~/plugins/moment.js' ],

  // Modules only required during development and build time
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module', 
    '@nuxtjs/vuetify'
  ],

  // Modules required
  modules: [
    '@nuxtjs/axios',
    '@zzopark/validation'
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: { prefix: '/api' },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.lightBlue,
          secondary: colors.amber.lighten4,
          accent: colors.amber,
          info: colors.blueGrey.lighten1,
          online: colors.green,
          offline: colors.red
        },
        dark: {
          primary: colors.blue,
          secondary: colors.amber.lighten4,
          accent: colors.amber,
          info: colors.blueGrey.lighten1,
          online: colors.green,
          offline: colors.red
        }
      }
    },
    defaultAssets: {
      icons: 'md'
    }
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {}
  }
}
