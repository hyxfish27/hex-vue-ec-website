<template>
  <div
    class="header
    text-secondary text-center
    d-flex justify-content-center align-items-center"
  >
    <p class="h1 my-0">{{ title }}</p>
  </div>
</template>

<style>
.header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    url('@/assets/banner.jpg');
  height: 300px;
  background-size: cover;
  background-position: center -4rem;
  background-repeat: no-repeat;
}
</style>

<script>
export default {
  data () {
    return {
      title: '這是標題'
    }
  }
}
</script>
