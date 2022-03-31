<template>
  <footer class="bg-dark py-4">
    <div class="container">
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-12 col-md-6 text-secondary">
          <p class="mb-2 h5">聯絡我們</p>
          <i class="bi bi-envelope h5"></i>
          <span>girlxgoodlife@gmail.com</span>
        </div>
        <div class="col-12 col-md-6 text-secondary">
          <p class="mb-2 h5">追蹤女子生活</p>
          <i class="bi bi-facebook h5"></i>
          <i class="bi bi-instagram h5"></i>
          <i class="bi bi-github h5"></i>
        </div>
      </div>
      <div class="text-center">
        <span class="mb-2 text-secondary h6 mr-1 mr-sm-3">
          &copy;&nbsp;Vicky Huang | 僅個人作品練習，無任何商業用途
        </span>
        <router-link
          class="text-secondary m-auto p-1"
          to="/login"
        >
          <i class="bi bi-gear mr-1 mr-sm-3"></i>
          <span>管理員登入</span>
        </router-link>
      </div>
    </div>
  </footer>
</template>
