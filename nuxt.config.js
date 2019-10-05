require('dotenv').config()
const colors = require('vuetify/es5/util/colors').default
const session = require('express-session')

module.exports = {
  mode: 'universal',
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
  serverMiddleware: [
    { path: '/api', handler: '~/server/api' }
  ],
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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
