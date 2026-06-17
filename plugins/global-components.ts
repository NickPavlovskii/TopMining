import globalComponents from '~/components/global/index'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(globalComponents)
})
