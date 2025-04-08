// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'bulma',
    // CSS file in the project
    '~/assets/css/main.css',
    // SCSS file in the project
    '@fortawesome/fontawesome-free/css/all.css',
  ]
})
