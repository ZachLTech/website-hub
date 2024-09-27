// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/seo", 'nuxt-viewport'],

  build: {
    transpile: ['swiper']
  },
  buildModules: [
    '@vueuse/nuxt',
  ],
  site: {
    url: 'https://sites.zachl.space',
    name: 'ZachLTech\'s Sitemap',
    description: 'My hub containing some of my websites, friends websites, and more!',
    defaultLocale: 'en',
  },

  compatibilityDate: '2024-08-08',
})