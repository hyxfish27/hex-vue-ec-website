<template>
  <div
    class="toast-container position-fixed pe-3 top-0 end-0 rounded-3"
    style="z-index: 1500"
  >
    <div
      v-for="(msg, key) in messages"
      :key="key"
      class="toast show"
      :class="`toast${key}`"
      role="alert"
    >
      <div class="toast-header bg-opacity-100 text-primary">
        <i
          class="bi fs-6 me-3"
          :class="`bi-${msg.emoji} text-${msg.style}`"
        ></i>
        <strong class="me-auto fs-6" :class="`text-${msg.style}`">{{
          msg.title
        }}</strong>
        <button
          type="button"
          class="btn-close"
          @click="clearToast(key)"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  methods: {
    toastShow () {
      setTimeout(() => {
        // 移除弟一個 message (最早的)
        this.messages.shift()
      }, 3000)
    },
    clearToast (index) {
      this.messages.splice(index, 1)
    }
  },
  mounted () {
    this.emitter.on('push-message', message => {
      const {
        style = 'success',
        title,
        content,
        emoji = `${process.env.VUE_APP_USER_SUCCESS}`
      } = message
      this.messages.push({ style, title, content, emoji })
      this.toastShow()
    })
  }
}
</script>
