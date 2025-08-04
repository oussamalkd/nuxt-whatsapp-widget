<script lang="ts" setup>
import { useNuxtApp, useRuntimeConfig } from '#app'
import { ref, computed } from 'vue'

const props = defineProps<{
  userImage?: string
  userName?: string
  phone: string
  messages?: string | string[]
  label?: string
}>()

const config = useRuntimeConfig().public.whatsappWidget || {}
const { $whatsappWidgetDefaultImage } = useNuxtApp()

const image = computed(() =>
  props.userImage || config.userImage || $whatsappWidgetDefaultImage,
)

const name = computed(() =>
  props.userName || config.userName || 'Support',
)

const phone = computed(() =>
  props.phone || config.phone,
)

const messages = computed(() =>
  props.messages || config.messages || 'Hi there 👋 How can I help you ?',
)

const label = computed(() =>
  props.label || config.label || 'Start Chat',
)

const whatsAppLink = computed(() =>
  `https://wa.me/${phone.value}`,
)
const showMessage = ref(false)
</script>

<template>
  <div
    class="whatsapp-widget-container"
  >
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
