<template>
  <div style="height: 200dvh;">
    <h1>Module Playground</h1>
    <button @click="toggleDir">
      Change Direction
    </button>
    <WhatsAppWidget
      phone="+212645599227"
      :messages=" ['how can I help you', 'testt hello']"
    />
  </div>
</template>

<script setup>
const dir = ref('rtl')

const toggleDir = () => {
  dir.value = dir.value === 'ltr' ? 'rtl' : 'ltr'
}

watch(dir, () => {
  useHead({
    htmlAttrs: {
      dir: dir.value,
    },
  })
})

useHead({
  htmlAttrs: { dir: 'rtl' },
})
</script>
