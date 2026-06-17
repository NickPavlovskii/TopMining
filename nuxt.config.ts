export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  css: ['./assets/style/main.css', './assets/style/tailwind.css'],

  modules: ['nuxt-quasar-ui', '@nuxt/ui', '@nuxt/icon'],

  quasar: {
    sassVariables: '@/assets/quasar-variables.scss',
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons'],
    },
  },
})
