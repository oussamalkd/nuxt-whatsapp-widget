# 📞 Nuxt WhatsApp Widget

A customizable and lightweight WhatsApp chat widget module for Nuxt 3 & 4. Let users contact you directly from your website using WhatsApp.

![npm](https://img.shields.io/npm/v/nuxt-whatsapp-widget?color=green)  
![license](https://img.shields.io/npm/l/nuxt-whatsapp-widget)  
![nuxt](https://img.shields.io/badge/Nuxt-3.x-00DC82?logo=nuxt.js)

---

## ✨ Features

- 📱 Floating WhatsApp chat widget
- 💬 Custom welcome messages
- 👤 Customizable support agent name and avatar
- ⚙️ Configurable via Nuxt config or component props
- ⚡ Easy and automatic integration
- 🌐 Built-in RTL support using logical CSS properties for full right-to-left compatibility

---

## 📦 Installation

```bash
npm install nuxt-whatsapp-widget
# or
yarn add nuxt-whatsapp-widget
```

---

## 🔌 Module Setup

In your `nuxt.config.ts`, register the module and provide any options you want:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-whatsapp-widget'],

  whatsappWidget: {
    phone: '+212600000000',             // ✅ required
    userName: 'Support Team',           // optional
    userImage: '/icons/user-profile.svg', // optional (from /public or external URL)
    messages: ['Hello!', 'Need help?']  // optional (string or array)
  }
})
```

---

## ⚙️ Module Options

## ⚙️ Module Options

| Option       | Type                  | Required | Default                         | Description                                                |
|--------------|-----------------------|----------|----------------------------------|------------------------------------------------------------|
| `phone`      | `string`              | ✅       | —                                | WhatsApp number (international format, e.g., `+2126...`)   |
| `userName`   | `string`              | ❌       | `"Support"`                      | Name of the agent shown in the widget                      |
| `userImage`  | `string`              | ❌       | `"/icons/user-profile.svg"`      | Path or URL to agent avatar (prefer `/public` or full URL) |
| `messages`   | `string \| string[]` | ❌       | `"Hi there 👋 How can I help you ?"` | One or more messages shown in the widget                   |
| `label`      | `string`              | ❌       | `"Start Chat"`                   | Text shown on the button or entry point of the widget      |

---

## 🧱 Component Usage

The widget is injected automatically, but you can also use the component manually and override props.

### ✅ Manual Usage:

```vue
<template>
  <WhatsappWidget
    phone="+212699988877"
    user-name="Support Agent"
    user-image="/images/avatar.svg"
    :messages="['Hi there!', 'We are here to help.']"
    label="Start Chat Now"
  />
</template>
```

### 🔁 Props

| Prop         | Type                  | Description                               |
|--------------|-----------------------|-------------------------------------------|
| `phone`      | `string`              | Overrides phone number                    |
| `userName`   | `string`              | Overrides agent name                      |
| `userImage`  | `string`              | Overrides avatar image                    |
| `messages`   | `string \| string[]` | Overrides welcome messages                |

Props will override the values provided in `nuxt.config.ts`.

---

## 🧪 Local Development & Testing

1. Link your local module:

```bash
cd nuxt-whatsapp-widget
npm install
npm link
```

2. In your Nuxt test project:

```bash
npm link nuxt-whatsapp-widget
```

3. Restart your dev server and test usage with config or component props.

---

## 📄 License

[MIT](./LICENSE)

---

## 🙌 Credits

Built with ❤️ by [Oussama Louelkadi](https://github.com/oussamalkd/)

---
