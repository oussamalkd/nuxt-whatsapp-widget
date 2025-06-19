import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  phone: string
  message?: string
  position?: 'left' | 'right'
  iconColor?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-whatsapp-widget',
    configKey: 'whatsappWidget',
    compatibility: {
      nuxt: '^3.0.0',
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
    phone: '0123456789',
    message: 'Hello',
    position: 'left',
    iconColor: '#25D366',
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    _nuxt.options.runtimeConfig.public.whatsappWidget = _options

    _nuxt.options.css.push(resolver.resolve('./runtime/assets/css/fonts.css'))

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      isAsync: true,
    })
  },
})
