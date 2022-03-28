<template>
  <!-- Carousel -->
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item"
        data-bs-interval="2000"
        v-for="(image, key) in imagesUrl"
        :key="key"
        :class="{ active: key == 0 }"
      >
        <img :src="image" class="d-block w-100 img-fluid" alt="girl life" />
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
  <div class="container">
    <hr class="bg-primary" />
    <h4 class="h4">熱門商品</h4>
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4">
          <img
            src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            class="card-img-top h-200 object-cover"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">設備齊全單層活動空間</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <img
            src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            class="card-img-top h-200 object-cover"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">設備齊全單層活動空間</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <img
            src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            class="card-img-top h-200 object-cover"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">設備齊全單層活動空間</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-secondary mb-4">
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus maiores
        accusantium assumenda earum temporibus ut in dicta nemo necessitatibus
        inventore.
      </div>
    </div>
    <div class="row-converse">
      <div class="col-md-6"></div>
      <div class="col-md-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi qui
        culpa reprehenderit quas alias, animi earum eos fuga ad?
      </div>
    </div>
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        molestiae qui reiciendis. Sed laboriosam optio maiores, cumque ducimus
        ea nostrum?
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  data () {
    return {
      imagesUrl: [
        'https://images.unsplash.com/photo-1620331317984-53581633aff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1620331314222-c1cf9a9dbba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1620331309205-b5a4669ac526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      ]
    }
  },
  components: {}
}
</script>
