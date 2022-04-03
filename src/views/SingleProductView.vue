<template>
  <HeaderPic :title="title"></HeaderPic>
  <Loading :is-ready="isReady"></Loading>
  <div class="container">
    <div class="row py-5">
      <div class="col-md-7 col-lg-6">
        <div
          :style="{ backgroundImage: `url(${product.imageUrl})` }"
          style="height: 25rem; background-size: cover; background-position: center center"
          class="mb-3"
        ></div>
      </div>
      <div class="col-md-5 col-lg-6">
        <span
          class="text-white bg-success rounded-3 py-1 px-2"
          v-if="product.origin_price !== product.price"
          >特價中</span
        >
        <h3 class="text-primary my-3">
          {{ product.title }}
        </h3>
        <div class="price mb-3">
          <del
            class="text-dark h5"
            v-if="product.price !== product.origin_price"
          >
            {{ $filters.currency(product.origin_price) }}
          </del>
          <p class="text-primary h4">
            {{ $filters.currency(product.price) }}
          </p>
          <div class="input-group">
            <select id="itemNum" class="form-select" v-model="qty" min="1">
              <option :value="num" v-for="num in 10" :key="`${num}`"
                >{{ num }}
              </option>
            </select>
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCart(product.id, qty)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import HeaderPic from '@/components/Front/HeaderPic.vue'
import Loading from '@/components/Loading.vue'

export default {
  data () {
    return {
      title: '商品細節',
      product: {},
      productId: '',
      qty: 1,
      isReady: true
    }
  },
  components: {
    HeaderPic,
    Loading
  },
  inject: ['emitter'],
  methods: {
    getProduct () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.productId}`
      this.$http
        .get(url)
        .then(res => {
          this.product = res.data.product
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
    this.productId = this.$route.params.id
    this.getProduct()
  }
}
</script>
