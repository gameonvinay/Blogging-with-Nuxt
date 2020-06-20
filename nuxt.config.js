import bodyParser from 'body-parser'
require('dotenv').config()
export default {
  mode: 'universal',
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/core-components.js', '@/plugins/date-filter.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Montserrat:600'],
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: { baseURL: process.env.BASE_URL || 'https://nuxt-blog-884b3.firebaseio.com', credentials: false },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-884b3.firebaseio.com',
    fbAPIKey: process.env.fbAPIKey,
  },
  /* publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-884b3.firebaseio.com',
  },
  privateRuntimeConfig: { fbAPIKey: process.env.fbAPIKey }, */
  serverMiddleware: [bodyParser.json(), '@api'],
  generate: {
    fallback: true,
    exclue: [/admin/],
  },
}
