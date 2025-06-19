<script lang="ts" setup>
const messages = ref<string[]>([
  'Hi there 👋\n How can I help you ?',
  'welcome to your support',
  'this is a long text and should be break line by words.. lets test it an check the style. this is another line to cjeck the time position',
])

const showMessage = ref(true)
</script>

<template>
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
          src="../assets/icons/user-profile.svg"
          alt="WhatsApp Profile Picture"
        >
      </div>
      <div class="user-name">
        User Name
      </div>
    </div>
    <div class="chat">
      <Message
        :messages="messages"
      />
    </div>
    <div class="action">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/1XXXXXXXXXX"
        target="_blank"
      >
        Start Chat
      </a>
    </div>
  </div>
</template>

<style>
@import url("../assets/css/widget.css");
</style>
