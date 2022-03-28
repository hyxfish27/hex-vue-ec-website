<template>
  <HeaderPic></HeaderPic>
  <div class="container">
    <div class="row mb-2 mb-md-4 justify-content-around">
      <button class="btn btn-primary text-white col-5 col-md-2 rounded-pill">
        分類 1
      </button>
      <button class="btn btn-primary text-white col-5 col-md-2 rounded-pill">
        分類 2
      </button>
      <button class="btn btn-primary text-white col-5 col-md-2 rounded-pill">
        分類 3
      </button>
      <button class="btn btn-primary text-white col-5 col-md-2 rounded-pill">
        分類 4
      </button>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="(product, key) in products"
        :key="product.id + key"
      >
        <div class="card mb-4 rounded-3">
          <div
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            style="height: 300px; background-size: cover; background-position: center center"
          ></div>
          <div class="card-body">
            <h5 class="card-title">
              <router-link :to="`/product/${product.id}`">
                {{ product.title }}
              </router-link>
            </h5>
            <div class="row">
              <div class="col-lg-6">
                <p class="card-text text-primary fs-4">
                  NT$ {{ product.price }}
                </p>
              </div>
              <div class="col-lg-6"></div>
              <div class="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import HeaderPic from '@/components/Front/HeaderPic.vue'
// import ProductModal from '@/components/ProductModal.vue'
export default {
  data () {
    return {
      products: [],
      productId: '',
      isLoading: ''
    }
  },
  components: {
    HeaderPic
    // ProductModal
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http
        .get(url)
        .then(res => {
          this.products = res.data.products
        })
        .catch(err => {
          alert(err.data.message)
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
  }
}
</script>
