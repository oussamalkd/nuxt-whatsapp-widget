export default defineNuxtConfig({

  modules: ['../src/module'],

  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        dir: 'ltr',
      },
    },
  }, compatibilityDate: 'latest',
  whatsappWidget: {},
})
