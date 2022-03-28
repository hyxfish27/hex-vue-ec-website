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
          <router-link class="nav-link" to="/products">
            逛逛商品
          </router-link>
          <router-link class="nav-link" to="/about">
            關於女子生活
          </router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/favorite"> 收藏 </router-link>
          <router-link class="nav-link" to="/cart">
            購物車
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
