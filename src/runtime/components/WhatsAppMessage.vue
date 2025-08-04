<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    messages?: string | string[]
  }>(),
  {
    messages: 'Hi there 👋 How can I help you ?',
  },
)

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
        <NuxtTime
          :datetime="Date.now()"
          hour="2-digit"
          minute="2-digit"
          hour-cycle="h23"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import url('../assets/css/message.css');
</style>
