<template>
  <nav class="navbar navbar-expand-lg bg-white sticky-top" id="frontNav">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <div class="text-align-justify">
          女 子 x 生 活<br />
          Good Life
        </div>
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
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/admin/products">
            商品管理
          </router-link>
          <router-link class="nav-link" to="/admin/orders">
            訂單
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
</template>

<script>
export default {
  methods: {
    logout () {
      const url = `${process.env.VUE_APP_API}/logout`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          document.cookie = 'myToken=;expires=;'
          alert('已成功登出')
          this.$router.replace('/')
        }
      })
    }
  }
}
</script>
