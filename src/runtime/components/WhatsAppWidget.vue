<script lang="ts" setup>
import { useNuxtApp, useRuntimeConfig } from '#app'

const props = defineProps<{
  userImage?: string
  userName?: string
  phone: string
  messages?: string | string[]
  label?: string
}>()

const config = useRuntimeConfig().public.whatsappWidget || {}
const { $whatsappWidgetDefaultImage } = useNuxtApp()

const image = props.userImage || config.userImage || $whatsappWidgetDefaultImage
const name = props.userName || config.userName || 'Support'
const phone = props.phone || config.phone
const messages = props.messages || config.messages || 'Hi there 👋 How can I help you ?'
const label = props.label || config.label || 'Start Chat'
const whatsAppLink = `https://wa.me/${phone}`

const showMessage = ref(false)
</script>

<template>
  <div class="whatsapp-widget-container">
    <div
      class="whatsapp-widget"
      @click="showMessage = !showMessage"
    >
      <div class="icon">
        <img
          src="../assets/icons/whatsapp.svg"
          width="30"
          height="30"
          alt="whatsapp icon"
        >
      </div>
    </div>

    <div
      class="message-box"
      :class="{ active: showMessage }"
    >
      <div class="header">
        <div class="profile-picture">
          <img
            :src="image"
            alt="WhatsApp Profile Picture"
          >
        </div>
        <div class="user-name">
          {{ name }}
        </div>
      </div>
      <div class="chat">
        <WhatsAppMessage
          :messages="messages"
        />
      </div>
      <div class="action">
        <a
          aria-label="Chat on WhatsApp"
          :href="whatsAppLink"
          target="_blank"
        >
          {{ label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style>
@import url("../assets/css/widget.css");
</style>
