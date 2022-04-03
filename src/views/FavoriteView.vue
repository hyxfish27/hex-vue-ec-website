<template>
  <Loading :is-ready="isReady"></Loading>
  <HeaderPic :title="title"></HeaderPic>
  <div class="container">
    <table
      class="table align-middle text-center
      border border-secondary border-5 mt-4"
      v-if="favorites.length > 0"
    >
      <thead class="bg-secondary text-dark">
        <tr>
          <th></th>
          <th>圖片</th>
          <th>商品</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in likedProducts" :key="product.id">
          <td>
            <button
              class="btn btn-success
                  text-center text-white text-nowrap"
              @click.stop="removeLiked(product.id)"
            >
              <i class="bi bi-heart-fill h6 me-2"></i>
              <span class="h6">移除</span>
            </button>
          </td>
          <td style="width: 120px">
            <div
              :style="{ backgroundImage: `url(${product.imageUrl})` }"
              style="
                  height: 100px;
                  background-size: cover;
                  background-position: center"
            ></div>
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            <div class="h5" v-if="product.price === product.origin_price">
              {{ product.price }} 元
            </div>
            <div v-else>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">特價 {{ product.price }} 元</div>
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                class="btn btn-primary w-100
                  text-center text-white text-nowrap"
                @click.stop="addToCart(product.id)"
                :disabled="isLoading === product.id"
              >
                <i class="bi bi-bag-fill h6 me-1 me-md-2"></i>
                <span class="h6">加入購物車</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="row justify-content-center py-5 text-center" v-else>
      <div class="col-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          fill="currentColor"
          class="bi bi-search-heart text-secondary"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"
          />
          <path
            d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
          />
        </svg>
      </div>
      <div class="col-12">
        <h4 class="my-3 h4 text-dark">還沒有喜歡的商品嗎? 快來逛逛收藏</h4>
        <router-link to="/products">
          <button type="button" class="btn btn-primary h4" style="width: 9rem">
            前往選購<i class="bi bi-arrow-right-circle-fill ms-2 h4"></i>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
/* i {
  margin-right: 8px;
} */
</style>

<script>
import HeaderPic from '@/components/Front/HeaderPic.vue'
import Loading from '@/components/Loading.vue'

export default {
  data () {
    return {
      title: '收藏清單',
      favorites: [],
      products: [],
      likedProducts: [],
      isReady: true,
      isLoading: ''
    }
  },
  components: {
    HeaderPic,
    Loading
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http
        .get(url)
        .then(res => {
          this.products = res.data.products
          this.getLiked()
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
    getFavorites () {
      this.favorites = JSON.parse(localStorage.getItem('favorites'))
    },
    getLiked () {
      this.likedProducts = this.products.filter(product =>
        this.favorites.includes(product.id)
      )
    },
    removeLiked (id) {
      this.isReady = false
      const index = this.favorites.indexOf(id)
      if (index !== -1) {
        this.favorites.splice(index, 1)
      }
      this.emitter.emit('push-message', {
        style: 'dark',
        title: '移除收藏',
        emoji: `${process.env.VUE_APP_USER_FAIL}`
      })
      this.isReady = true
      this.getLiked()
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
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
    }
  },
  mounted () {
    this.getProducts()
    this.getFavorites()
  }
}
</script>
