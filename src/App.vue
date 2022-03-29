<template>
  <ToastMessage></ToastMessage>
  <router-view />
</template>

<style lang="scss">
// 匯入自定義變數 all.scss
@import './assets/stylesheets/all';
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css');
</style>

<script>
import emitter from '@/methods/eventBus'
import ToastMessage from '@/components/ToastMessage.vue'

export default {
  components: {
    ToastMessage
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
