<script lang="ts" setup>
import { computed } from 'vue'

defineProps({
  messages: {
    type: Array<string>,
    required: true,
  },
  companyName: {
    type: String,
    default: '',
  },
})

// const time = computed(() => new Date().getHours() + ':' + new Date().getMinutes())

const time = computed<string>(() => {
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0')
  const mins = date.getMinutes().toString().padStart(2, '0')

  return `${hours}:${mins}`
})
</script>

<template>
  <div class="WhatsappChat__MessageContainer">
    <div
      v-for="(item, i) in messages"
      :key="i"
      style="opacity: 1"
      class="WhatsappChat__Message"
    >
      <div class="WhatsappChat__Text">
        {{ item }}
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
