<template>
  <div class="d-flex flex-column min-vh-100">
    <FrontNav></FrontNav>
    <router-view />
    <Footer class="mt-auto"></Footer>
  </div>
</template>

<script>
import FrontNav from '@/components/Front/FrontNav.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    FrontNav,
    Footer
  }
}
</script>
