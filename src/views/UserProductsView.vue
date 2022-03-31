<template>
  <HeaderPic></HeaderPic>
  <Loading :is-ready="isReady"></Loading>
  <div class="container bg-secondary rounded-3 mb-0 mb-md-4">
    <div class="row justify-content-around py-4">
      <button
        class="btn btn-primary text-white col-5 col-md-2 rounded-pill mb-3 mb-md-0"
        @click="getCategory(小資家電)"
      >
        小資家電
      </button>
      <button
        class="btn btn-primary text-white col-5 col-md-2 rounded-pill mb-3 mb-md-0"
        @click="getCategory(質感居家)"
      >
        質感居家
      </button>
      <button
        class="btn btn-primary text-white col-5 col-md-2 rounded-pill mb-md-0"
        @click="getCategory(精緻生活)"
      >
        精緻生活
      </button>
      <button
        class="btn btn-primary text-white col-5 col-md-2 rounded-pill mb-md-0"
        @click="getCategory(療癒小物)"
      >
        療癒小物
      </button>
    </div>

    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="(product, key) in products"
        :key="product.id + key"
        style="cursor: pointer;"
        @click="$router.push(`/product/${product.id}`)"
      >
        <div class="card mb-4 rounded-3 border-primary border-1 shadow-info">
          <div
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            style="height: 15rem; background-size: cover; background-position: center center"
            class="p-3"
          >
            <span
              class="text-white bg-success rounded-3 p-1"
              v-if="product.origin_price !== product.price"
              >特價中</span
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <router-link class="link-primary" :to="`/product/${product.id}`">
                {{ product.title }}
              </router-link>
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
                  <i class="bi bi-heart-fill h6"></i>
                  <span class="h6">加入收藏</span>
                </button>
              </div>
              <div class="col-6 mb-3" v-else>
                <button
                  class="btn btn-success w-100
                  text-center text-white text-nowrap"
                  @click.stop="toggleFavorites(product.id)"
                >
                  <i class="bi bi-heart-fill h6"></i>
                  <span class="h6">移除收藏</span>
                </button>
              </div>
              <div class="col-6 mb-3">
                <button
                  class="btn btn-primary w-100
                  text-center text-white text-nowrap"
                  @click.stop="innerButton"
                >
                  <i class="bi bi-bag-fill h6"></i>
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
      products: [],
      productId: '',
      isLoading: '',
      isReady: '',
      pagination: {},
      favorites: []
    }
  },
  components: {
    HeaderPic,
    Pagination,
    Loading
  },
  inject: ['emitter'],
  methods: {
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
          emoji: 'emoji-heart-eyes'
        })
      } else {
        this.favorites.splice(index, 1)
        this.emitter.emit('push-message', {
          style: 'dark',
          title: '移除收藏',
          emoji: 'emoji-dizzy'
        })
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    toggleFavorBtn (id) {
      const liked = this.favorites.includes(id)
      return liked
    },
    innerButton () {
      alert('這是內層')
    },
    test (text) {
      alert(text)
    },
    getProducts (page = 1) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http
        .get(url)
        .then(res => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '取得產品失敗',
            content: err.response.data.message
          })
        })
    },
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http
        .post(url, { data: cart })
        .then(res => {
          // console.log(res)
          alert(res.data.message)
          this.isLoading = ''
        })
        .catch(err => {
          alert(err.data.message)
        })
    },
    openProductModal (id) {
      // 外層資料 -> 內層
      this.productId = id
      // 調用 ProductModal 元件底下的 openModal() 方法
      this.$refs.productModal.openModal()
    }
  },
  mounted () {
    this.getProducts()
    this.getFavorites()
  }
}
</script>
