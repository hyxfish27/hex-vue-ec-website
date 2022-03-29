<template>
  <nav class="navbar navbar-expand-lg bg-white sticky-top justify-content-center" id="frontNav">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <div id="brandName">
          <i class="bi bi-flower1 h3"></i>
          <span class="h3">女 子 x 生 活 Good Life</span>
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
      <i class="bi bi-justify navbar-toggler-icon h2 text-primary my-auto"></i>
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
          <router-link class="nav-link" to="/cart">
            <i class="bi bi-bag-fill d-none d-lg-inline-flex h4"></i>
            <p class="mb-0 h6">我要下單</p>
          </router-link>
          <router-link class="nav-link" to="/favorite">
            <i class="bi bi-heart-fill d-none d-lg-inline-flex h4"></i>
            <p class="mb-0 h6">我收藏的</p>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@500&display=swap');

#brandName {
  font-family: 'Kaisei Decol', serif;
}
</style>
