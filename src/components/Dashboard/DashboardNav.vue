<template>
  <nav
    class="navbar navbar-expand-lg bg-white sticky-top py-4"
    id="dashBoardNav"
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
        <div class="navbar-nav">
          <router-link
            class="nav-link btn-primary border border-white text-white"
            to="/admin/products"
          >
            <p class="mb-0 h6">產品列表</p>
          </router-link>
          <router-link
            class="nav-link btn-primary border border-white text-white"
            to="/admin/orders"
          >
            <p class="mb-0 h6">訂單管理</p>
          </router-link>
          <router-link
            class="nav-link btn-primary border border-white text-white"
            to="/admin/coupons"
          >
            <p class="mb-0 h6">優惠活動</p>
          </router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <button
            type="button"
            class="nav-link btn btn-primary text-white"
            @click.prevent="logout"
          >
            登出
          </button>
        </div>
      </div>
    </div>
  </nav>
  <!-- {{ $route.path }} -->
</template>

<script>
export default {
  inject: ['emitter'],
  methods: {
    logout () {
      const url = `${process.env.VUE_APP_API}/logout`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          document.cookie = 'myToken=;expires=;'
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.$router.replace('/')
        }
      })
    }
  }
}
</script>
