<template>
  <HeaderPic :title="title"></HeaderPic>
  <Loading :is-ready="isReady"></Loading>
  <div class="container bg-secondary rounded-3 my-0 my-md-4">
    <div class="row justify-content-around py-4">
      <button
        class="btn btn-primary col-7 col-md-2 rounded-pill text-white
        border border-white border-2 mb-3 mb-md-0"
        @click.prevent="getCategory('')"
      >
        <strong class="h5">全部商品</strong>
      </button>
      <button
        class="btn btn-primary col-5 col-md-2 rounded-pill text-white
        border border-white border-2 mb-3 mb-md-0"
        @click.prevent="getCategory('小資家電')"
      >
        <strong class="h5">小資家電</strong>
      </button>
      <button
        class="btn btn-primary col-4 col-md-2 rounded-pill text-white
        border border-white border-2 mb-3 mb-md-0"
        @click.prevent="getCategory('質感居家')"
      >
        <strong class="h5">質感居家</strong>
      </button>
      <button
        class="btn btn-primary col-4 col-md-2 rounded-pill text-white
        border border-white border-2 mb-3 mb-md-0"
        @click.prevent="getCategory('精緻生活')"
      >
        <strong class="h5">精緻生活</strong>
      </button>
      <button
        class="btn btn-primary col-4 col-md-2 rounded-pill text-white
        border border-white border-2 mb-3 mb-md-0"
        @click.prevent="getCategory('療癒小物')"
      >
        <strong class="h5">療癒小物</strong>
      </button>
    </div>

    <div class="row">
      <div
        class="col-12 col-md-6 col-xl-4"
        v-for="(product, key) in filterCategories"
        :key="product.id + key"
      >
        <div
          class="card mb-4 rounded-3 border-primary border-1 shadow-info"
          style="cursor: pointer;"
          @click="this.$router.push(`/product/${product.id}`)"
        >
          <div
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            style="height: 15rem; background-size: cover; background-position: center center"
            class="p-3"
          >
            <span
              class="text-white bg-success rounded-3 py-1 px-2"
              v-if="product.origin_price !== product.price"
              >特價中</span
            >
          </div>
          <div class="card-body">
            <h5 class="card-title text-primary">
              <!-- <router-link class="link-primary" :to="`/product/${product.id}`"> -->
              {{ product.title }}
              <!-- </router-link> -->
            </h5>

            <div class="row justify-content-center align-items-center">
              <div class="col-12 text-primary h4 mb-3">
                <div class="price">NT ${{ product.price }}</div>
              </div>
              <div class="col-6 mb-3" v-if="!toggleFavorBtn(product.id)">
                <button
                  class="btn btn-primary w-100
                  text-center text-white text-nowrap"
                  @click.stop="toggleFavorites(product.id)"
                >
                  <i class="bi bi-heart-fill h6 me-1 me-md-2"></i>
                  <span class="h6">加入收藏</span>
                </button>
              </div>
              <div class="col-6 mb-3" v-else>
                <button
                  class="btn btn-success w-100
                  text-center text-white text-nowrap"
                  @click.stop="toggleFavorites(product.id)"
                >
                  <i class="bi bi-heart-fill h6 me-1 me-md-2"></i>
                  <span class="h6">移除收藏</span>
                </button>
              </div>
              <div class="col-6 mb-3">
                <button
                  class="btn btn-primary w-100
                  text-center text-white text-nowrap"
                  @click.stop="addToCart(product.id)"
                >
                  <i class="bi bi-bag-fill h6 me-1 me-md-2"></i>
                  <span class="h6">加入購物車</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination -->
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  </div>
  <router-view />
</template>

<script>
import HeaderPic from '@/components/Front/HeaderPic.vue'
import Pagination from '@/components/Pagination.vue'
import Loading from '@/components/Loading.vue'

export default {
  data () {
    return {
      title: '商品總覽',
      products: [],
      productId: '',
      categories: ['小資家電', '質感居家', '精緻生活', '療癒小物'],
      filterCategory: '',
      isLoading: '',
      isReady: '',
      pagination: {},
      favorites: []
      // cartData: {}
    }
  },
  components: {
    HeaderPic,
    Pagination,
    Loading
  },
  inject: ['emitter'],
  methods: {
    getCategory (category) {
      this.filterCategory = category
      console.log(category)
    },
    getFavorites () {
      this.favorites = JSON.parse(localStorage.getItem('favorites'))
      if (this.favorites == null) {
        this.favorites = []
      }
    },
    toggleFavorites (id) {
      this.getFavorites()
      const index = this.favorites.indexOf(id)
      if (index === -1) {
        this.favorites.push(id)
        this.emitter.emit('push-message', {
          style: 'success',
          title: '收藏成功',
          emoji: `${process.env.VUE_APP_USER_SUCCESS}`
        })
      } else {
        this.favorites.splice(index, 1)
        this.emitter.emit('push-message', {
          style: 'dark',
          title: '移除收藏',
          emoji: `${process.env.VUE_APP_USER_FAIL}`
        })
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    toggleFavorBtn (id) {
      const liked = this.favorites.includes(id)
      return liked
    },
    getProducts (page = 1) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http
        .get(url)
        .then(res => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          const { categoryName } = this.$route.params
          if (categoryName) {
            this.filterCategory = categoryName
          }
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_USER_FAIL}`
          })
        })
    },
    // getCart () {
    //   const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
    //   this.$http
    //     .get(url)
    //     .then(res => {
    //       this.cartData = res.data.data
    //       // alert(this.cartData.carts.length)
    //     })
    //     .catch(err => {
    //       this.emitter.emit('push-message', {
    //         style: 'danger',
    //         title: err.response.data.message,
    //         emoji: `${process.env.VUE_APP_USER_FAIL}`
    //       })
    //     })
    // },
    addToCart (id, qty = 1) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http
        .post(url, { data: cart })
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_USER_SUCCESS}`
          })
          this.isLoading = ''
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_USER_FAIL}`
          })
          this.isReady = true
        })
    },
    openProductModal (id) {
      // 外層資料 -> 內層
      this.productId = id
      // 調用 ProductModal 元件底下的 openModal() 方法
      this.$refs.productModal.openModal()
    }
  },
  computed: {
    filterCategories () {
      if (this.filterCategory) {
        return this.products.filter(item => {
          const data = item.category.includes(this.filterCategory)
          return data
        })
      }
      return this.products
    }
  },
  mounted () {
    this.getProducts()
    this.getFavorites()
    // this.getCart()
  }
}
</script>

<style>
.card:hover {
  position: relative;
  top: -4px;
  right: -4px;
}
</style>
