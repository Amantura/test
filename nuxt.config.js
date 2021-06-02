export default {
  head: require('./configs/head'),

  css: [
    '@/assets/css/app.css',
    '@/assets/css/tailwind.css'
  ],

  plugins: [
    '@/plugins/v-mask.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {},

  build: {
  }
}
