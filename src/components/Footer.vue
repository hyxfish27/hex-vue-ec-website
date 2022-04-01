<template>
  <footer class="bg-dark py-4">
    <div class="container">
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-12 col-md-6 text-secondary">
          <p class="mb-2 h5">聯絡我們</p>
          <i class="bi bi-envelope h5 me-1 me-sm-2"></i>
          <span>girlxgoodlife@gmail.com</span>
        </div>
        <div class="col-12 col-md-6 text-secondary">
          <p class="mb-2 h5">追蹤女子生活</p>
          <i class="bi bi-facebook h5 me-1 me-sm-2"></i>
          <i class="bi bi-instagram h5 me-1 me-sm-2"></i>
          <i class="bi bi-github h5 me-1 me-sm-2"></i>
        </div>
      </div>
      <div class="row justify-content-start">
        <div class="col-12 col-md-8 mb-2">
          <span class="mb-2 text-secondary h6">
            &copy;&nbsp;Vicky Huang | 僅個人作品練習，無任何商業用途
          </span>
        </div>
        <div class="col-12 col-md-8">
          <router-link
            class="text-secondary border border-secondary border-1 p-1"
            to="/login"
          >
            <i class="bi bi-gear me-1"></i>
            <span>管理員登入</span>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
