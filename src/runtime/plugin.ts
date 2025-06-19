import defaultUserImage from './assets/icons/user-profile.svg'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.provide('whatsappWidgetDefaultImage', defaultUserImage)
})
