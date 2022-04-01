<template>
  <div
    class="header
    text-white text-center
    d-flex justify-content-center align-items-center"
  >
    <p
      class="h1 px-5 py-3 my-0 text-white
      border border-white border-3
    bg-secondary bg-opacity-25"
    >
      {{ title }}
    </p>
  </div>
</template>

<style>
.header {
  background-image: linear-gradient(
      rgba(96, 101, 108, 0.8),
      rgba(255, 211, 181, 0.6) /*dark, secondary*/
    ),
    url('@/assets/banner.jpg');
  height: 300px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>

<script>
export default {
  props: ['title']
}
</script>
