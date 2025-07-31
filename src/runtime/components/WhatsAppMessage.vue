<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    messages?: string | string[]
  }>(),
  {
    messages: 'Hi there 👋 How can I help you ?',
  }
)

const time = computed<string>(() => {
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0')
  const mins = date.getMinutes().toString().padStart(2, '0')

  return `${hours}:${mins}`
})

const normalizedMessages = computed(() => {
  return typeof props.messages === 'string'
    ? [props.messages]
    : props.messages
})
</script>

<template>
  <div class="WhatsappChat__MessageContainer">
    <div
      v-for="(message, i) in normalizedMessages"
      :key="i"
      style="opacity: 1"
      class="WhatsappChat__Message"
    >
      <div class="WhatsappChat__Text">
        {{ message }}
      </div>
      <div class="WhatsappChat__Time">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<style>
@import url('../assets/css/message.css');
</style>
