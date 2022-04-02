<template>
  <ToastMessage></ToastMessage>
  <router-view />
</template>

<style lang="scss">
// 匯入自定義變數 all.scss
@import './assets/stylesheets/all';
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css');
@import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@500&display=swap');

#brandName {
  font-family: 'Kaisei Decol', serif;
}

.btn-primary,
.btn-success {
  color: #fff;
}

.btn-outline-primary:hover,
.btn-outline-success:hover {
  color: #fff;
}
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
