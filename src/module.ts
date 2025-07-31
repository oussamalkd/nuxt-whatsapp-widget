import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  phone: string
  userName?: string
  userImage?: string
  messages?: string | string[]
  label?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-whatsapp-widget',
    configKey: 'whatsappWidget',
    compatibility: {
      nuxt: '>=3.0.0-rc.11',
    },
  },

  hooks: {
    'nitro:config': (nitroConfig) => {
      const { resolve } = createResolver(import.meta.url)

      nitroConfig.publicAssets ||= []
      nitroConfig.publicAssets.push(
        {
          dir: resolve('./runtime/images'),
          maxAge: 60 * 60 * 24 * 365, // one year
        },
        {
          dir: resolve('./runtime/assets/icons'),
          maxAge: 60 * 60 * 24 * 365, // one year
        },
      )
    },
  },

  // Default configuration options of the Nuxt module
  defaults: {
    phone: '',
    userName: 'Support',
    messages: 'Hi there 👋 How can I help you ?',
    label: 'Start Chat',
  },

  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    _nuxt.options.runtimeConfig.public.whatsappWidget = {
      phone: _options.phone,
      userName: _options.userName || '',
      userImage: _options.userImage,
      messages: _options.messages || '',
      label: _options.label || '',
    }

    _nuxt.options.css.push(resolver.resolve('./runtime/assets/css/fonts.css'))

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      isAsync: true,
    })
  },
})
