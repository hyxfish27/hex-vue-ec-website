<template>
  <HeaderPic :title="title"></HeaderPic>
  <h2>This is about page</h2>
</template>

<script>
import HeaderPic from '@/components/Front/HeaderPic.vue'
export default {
  data () {
    return {
      title: '關於女子'
    }
  },
  components: {
    HeaderPic
  }
}
</script>
