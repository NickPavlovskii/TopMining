export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  css: ['./assets/style/main.css', './assets/style/tailwind.css'],

  modules: ['nuxt-quasar-ui', '@nuxt/ui', '@nuxt/icon'],

  fonts: {
    providers: {
      adobe: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
      google: false,
      googleicons: false,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import'],
        },
        sass: {
          silenceDeprecations: ['import'],
        },
      },
    },
  },

  quasar: {
    sassVariables: '@/assets/quasar-variables.scss',
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons'],
    },
  },
})
