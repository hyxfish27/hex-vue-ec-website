<template>
  <HeaderPic :title="title"></HeaderPic>
  <div class="container-fluid px-0 text-center">
    <div class="row">
      <div class="col-md-7">
        <img src="@/assets/about.jpg" alt="girls" class="w-100" />
      </div>
      <div class="col-md-5">
        <h2>我們三個是大學認識的好朋友，出社會了之後，發現一個人住有好多</h2>
      </div>
    </div>
    <router-link to="/" class="btn btn-primary text-white h4 my-3"
      >回首頁</router-link
    >
  </div>
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
