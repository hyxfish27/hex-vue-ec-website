<template>
  <!-- Carousel -->
  <div id="carouselExampleFade" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div
        class="carousel-item text-center bg-secondary"
        data-bs-interval="3000"
        v-for="(carousel, key) in carousels"
        :key="key"
        :class="{ active: key == 0 }"
      >
        <img :src="carousel.imageUrl" class="h-100 img-fluid" alt="girl life" />
        <div
          class="carousel-caption
          d-none d-sm-inline-block
          position-absolute top-50"
        >
          <span class="h1 text-dark text-nowrap bg-secondary">
            {{ carousel.caption }}
          </span>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div class="container text-center">
    <p class="my-5">
      <span class="text-white bg-primary border-bottom border-white h2 px-3"
        >小資生活學</span
      >
    </p>
    <div class="row justify-content-center align-items-center text-center pb-3">
      <div class="col-md-6">
        <img :src="carousels[0].imageUrl" alt="" class="w-100" />
      </div>
      <div class="col-md-6 mb-3">
        <h4 class="h4 text-dark">
          <strong>{{ carousels[0].category }}</strong>
        </h4>
        <p class="h5 text-dark mb-4">{{ carousels[0].description }}</p>
        <router-link class="btn btn-primary text-white" to="/products">
          <span class="h6">逛逛去</span>
          <i class="bi bi-arrow-right-circle-fill ms-1 h5"></i>
        </router-link>
      </div>
    </div>
    <div
      class="row justify-content-center align-items-center text-center bg-secondary py-3"
    >
      <div class="col-md-6 mb-3">
        <img :src="carousels[1].imageUrl" alt="" class="w-100" />
      </div>
      <div class="col-md-6">
        <h4 class="h4 text-dark">
          <strong>{{ carousels[1].category }}</strong>
        </h4>
        <p class="h5 text-dark mb-4">{{ carousels[1].description }}</p>
        <router-link class="btn btn-primary text-white" to="/products">
          <span class="h6">逛逛去</span>
          <i class="bi bi-arrow-right-circle-fill ms-1 h5"></i>
        </router-link>
      </div>
    </div>
    <div class="row justify-content-center align-items-center text-center py-3">
      <div class="col-md-6 mb-3">
        <img :src="carousels[2].imageUrl" alt="" class="w-100" />
      </div>
      <div class="col-md-6">
        <h4 class="h4 text-dark">
          <strong>{{ carousels[2].category }}</strong>
        </h4>
        <p class="h5 text-dark mb-4">{{ carousels[2].description }}</p>
        <router-link class="btn btn-primary text-white" to="/products">
          <span class="h6">逛逛去</span>
          <i class="bi bi-arrow-right-circle-fill ms-1 h5"></i>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <hr class="bg-primary" />
    <div class="row">
      <div class="col-md-6"></div>
    </div>
  </div>
  <router-view />
</template>

<style>
.carousel .carousel-item {
  height: 75vh;
}

.carousel .carousel-item img {
  object-fit: cover;
}
</style>

<script>
export default {
  data () {
    return {
      title: '這是標題',
      carousels: [
        // {
        //   imageUrl: require('@/assets/product_kitchen.jpg'),
        //   caption: ''
        // },
        {
          imageUrl: require('@/assets/product_house.jpg'),
          category: '質感居家',
          caption: '簡約，卻不簡單',
          description: '讓你在繁忙的行程中，省去多餘的煩惱'
        },
        {
          imageUrl: require('@/assets/product_life.jpg'),
          category: '精緻生活',
          caption: '日常，卻別有巧思',
          description: '我們在你的日常中，增添了一些驚喜'
        },
        {
          imageUrl: require('@/assets/product_small.jpg'),
          category: '療癒小物',
          caption: '微小，卻療癒了生活',
          description: '在煩悶的生活中，使你會心一笑'
        }
      ]
    }
  },
  components: {}
}
</script>
