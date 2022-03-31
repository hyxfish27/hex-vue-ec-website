<template>
  <HeaderPic></HeaderPic>
  <h2>this is favorite page</h2>
  <div v-for="(id, key) in favorites" :key="id + key">
    <p>{{ id }}</p>
  </div>
</template>

<script>
import HeaderPic from '@/components/Front/HeaderPic.vue'

export default {
  data () {
    return {
      favorites: []
    }
  },
  components: {
    HeaderPic
  },
  methods: {
    getFavorites () {
      this.favorites = JSON.parse(localStorage.getItem('favorites'))
    }
  },
  mounted () {
    this.getFavorites()
  }
}
</script>
