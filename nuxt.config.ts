// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/input.css',
  ],
  extends: [         // Extend from an installed npm package
    'github:AlexGiovanni/layer1', // Extend from a git repository
  ]
})
