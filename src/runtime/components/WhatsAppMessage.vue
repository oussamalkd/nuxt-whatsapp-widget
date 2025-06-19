<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  messages: string | string[]
}>()

// const time = computed(() => new Date().getHours() + ':' + new Date().getMinutes())

const time = computed<string>(() => {
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0')
  const mins = date.getMinutes().toString().padStart(2, '0')

  return `${hours}:${mins}`
})

const normalizedMessages = computed(() => {
  if (typeof props.messages === 'string') {
    return [props.messages]
  }
  return props.messages
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
