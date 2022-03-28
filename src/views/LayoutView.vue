<template>
  <div class="d-flex flex-column min-vh-100">
    <FrontNav></FrontNav>
    <router-view />
    <FootBar class="mt-auto"></FootBar>
  </div>
</template>

<style>

</style>

<script>
import FrontNav from '@/components/Front/FrontNav.vue'
import FootBar from '@/components/FootBar.vue'

export default {
  components: {
    FrontNav,
    FootBar
  }
}
</script>
