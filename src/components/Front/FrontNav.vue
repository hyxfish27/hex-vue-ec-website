<template>
  <nav
    class="navbar navbar-expand-lg bg-dark sticky-top justify-content-center"
    id="frontNav"
  >
    <div class="container">
      <router-link class="navbar-brand link-primary" to="/">
        <i class="bi bi-flower1 h3 me-2"></i>
        <span class="h3" id="brandName">女 子 x 生 活 Good Life</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i
          class="bi bi-justify navbar-toggler-icon h2 text-primary my-auto
          d-flex justify-content-center align-items-center"
        ></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav text-center">
          <router-link class="nav-link" to="/products">
            <i class="bi bi-handbag-fill d-none d-lg-inline-flex h4"></i>
            <p class="mb-0 h6">我要逛逛</p>
          </router-link>
          <router-link class="nav-link" to="/about">
            <i class="bi bi-chat-left-dots-fill d-none d-lg-inline-flex h4"></i>
            <p class="mb-0 h6">我想認識</p>
          </router-link>
        </div>
        <div class="navbar-nav ms-auto text-center">
          <router-link class="nav-link" to="/favorite">
            <i
              class="bi bi-heart-fill d-none d-lg-inline-flex h4 position-relative"
            >
              <span
                class="position-absolute top-50 start-100 translate-middle px-2
                badge rounded-pill bg-success bg-opacity-75"
                v-if="favorites.length > 0"
              >
                {{ favorites.length }}
              </span>
            </i>
            <p class="mb-0 h6">我收藏的</p>
          </router-link>
          <router-link class="nav-link" to="/cart">
            <i
              class="bi bi-cart-fill d-none d-lg-inline-flex h4 position-relative"
            >
              <span
                class="position-absolute top-50 start-100 translate-middle px-2
                badge rounded-pill bg-success bg-opacity-75"
                v-if="cartLength > 0"
              >
                {{ cartLength }}
              </span>
            </i>
            <p class="mb-0 h6">我要下單</p>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.badge {
  font-size: 8px;
  font-style: normal;
}
</style>

<script>
export default {
  data () {
    return {
      cartData: {},
      cartLength: '',
      favorites: [],
      favoriteNum: ''
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then(res => {
          this.cartData = res.data.data
          this.cartLength = this.cartData.carts.length
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
        })
    },
    getFavorites () {
      this.favorites = JSON.parse(localStorage.getItem('favorites'))
      if (this.favorites == null) {
        this.favorites = []
        this.favoriteNum = 0
      }
      this.favoriteNum = this.favorites.length
    }
  },
  mounted () {
    this.getCart()
    this.getFavorites()
  }
}
</script>
