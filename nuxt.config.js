import i18n from './plugins/i18n'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rea-product-cart',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://kit.fontawesome.com/6b19f306a9.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  serverMiddleware: [
    { path: '/api/', handler: '~/server-middleware/server.js' },
  ],
  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: '~/pages/index.vue',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/i18n', '@nuxtjs/dotenv'],

  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    S_PORT: process.env.S_PORT,
  },

  axios: {
    proxy: true,
  },
  proxy: { '/api/': 'http://localhost:4000/', },

  i18n: {
    detectBrowserLanguage: false,
    locales: [ 
      {code: 'en', file:'en.json'},
      {code: 'cn', file:'cn.json'},
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    vueI18n: i18n
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
