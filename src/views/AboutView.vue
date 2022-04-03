<template>
  <HeaderPic :title="title"></HeaderPic>
  <div class="container-fluid text-center">
    <div class="row justify-content-center align-items-center mb-3">
      <div class="col-md-7">
        <img src="@/assets/about.jpg" alt="girls" class="w-100" />
      </div>
      <div class="col-md-5">
        <p class="h2 text-center my-4">
          <span class="text-dark bg-secondary">女子 X 生活 X 背景</span>
        </p>
        <p class="h5 p-2 text-dark lh-lg">
          我們是大學時期認識的好朋友，出社會之後，發現一個人住有許多不方便的地方，有時狹小又雜亂的空間，讓人喪失鬥志。於是我們時常蒐集一些產品資訊，分享彼此新發現的實用小物，沒想到我們覺得不錯的產品，分享給更多人後，大家都覺得超好用!
        </p>
      </div>
    </div>
    <div class="row justify-content-center align-items-center mb-3">
      <div class="col-md-5">
        <p class="h2 text-center my-4">
          <span class="text-dark bg-secondary">女子 X 生活 X 沿革</span>
        </p>
        <p class="h5 p-2 text-dark lh-lg">
          2020年6月，我們創立了女子 X 生活，Good Life
          ，也就是好生活，將這些產品分享給更多人，並爭取到更優惠的價格，至今累積了一千多名顧客，從他們給我們的回饋中，我們才發現有這麼多人，因為把家打理整齊後，覺得又充滿了生活的動力，
        </p>
      </div>
      <div class="col-md-7">
        <img src="@/assets/about_room.jpg" alt="girls" class="w-100" />
      </div>
    </div>
    <div class="row justify-content-center align-items-center mb-3">
      <div class="col-md-7">
        <img src="@/assets/about_joy.jpg" alt="girls" class="w-100" />
      </div>
      <div class="col-md-5">
        <p class="h2 text-center my-4">
          <span class="text-dark bg-secondary">女子 X 生活 X 理念</span>
        </p>
        <p class="h5 p-2 text-dark lh-lg">
          我們希望所有獨自在外奮鬥的人，都能懂得善待自己、享受生活。所挑選的商品都是最實用，也最划算的，曾經身為小資族的我們，最懂妳們的需求!
        </p>
        <router-link
          to="/products"
          class="btn btn-primary text-white h4 my-3"
          ><span class="h5">開啟妳的新生活</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-balloon-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPic from '@/components/Front/HeaderPic.vue'
export default {
  data () {
    return {
      title: '關於女子'
    }
  },
  components: {
    HeaderPic
  }
}
</script>
