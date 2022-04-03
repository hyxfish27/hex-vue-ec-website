<template>
  <Loading :is-ready="isReady"></Loading>
  <HeaderPic :title="title"></HeaderPic>
  <div class="container">
    <div v-if="cartLength > 0">
      <div class="text-end my-3">
        <button
          class="btn btn-outline-primary"
          :disabled="isLoading !== ''"
          type="button"
          @click="clearAllCart"
        >
          清空購物車
        </button>
      </div>
      <table class="table align-middle border-secondary">
        <thead class="bg-secondary text-dark border-bottom border-secondary">
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cartData.carts">
            <tr v-for="cart in cartData.carts" :key="cart.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  :disabled="isLoading === cart.id"
                  @click="removeCartItem(cart.id)"
                >
                  <i
                    class="fas fa-spinner fa-pulse"
                    v-show="isLoading === cart.id"
                  ></i>
                  <i class="bi bi-trash"></i>
                </button>
              </td>
              <td>
                {{ cart.product.title }}
                <div
                  class="text-success"
                  v-if="cart.final_total !== cart.total"
                >
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <!-- <input min="1" type="number" class="form-control" :value="cart.qty"> -->
                    <!-- 不要相信使用者->用選的就不會出錯 -->
                    <select
                      id="cartNum"
                      class="form-select border border-primary"
                      v-model="cart.qty"
                      :disabled="isLoading === cart.id"
                      @change="updateCartItem(cart)"
                    >
                      <option
                        :value="num"
                        v-for="num in 20"
                        :key="`${num}${cart.id}`"
                        >{{ num }}
                      </option>
                    </select>
                    <span
                      class="input-group-text bg-secondary border border-primary text-dark"
                      id="basic-addon2"
                      >{{ cart.product.unit }}</span
                    >
                  </div>
                </div>
              </td>
              <td class="text-end">
                <div class="row justify-content-center">
                  <div class="col-md-6" v-if="cart.final_total !== cart.total">
                    <del>原價 : {{ cart.total }}</del>
                  </div>
                  <div class="col-md-6 text-center">
                    <small
                      class="text-success"
                      v-if="cart.final_total !== cart.total"
                      >折扣價：</small
                    >
                    {{ $filters.currency(cart.final_total) }}
                  </div>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ $filters.currency(cartData.total) }}</td>
          </tr>
          <tr v-if="cartData.final_total !== cartData.total">
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">
              {{ $filters.currency(cartData.final_total) }}
            </td>
          </tr>
        </tfoot>
      </table>
      <div class="container bg-secondary mb-4">
        <div class="row justify-content-center align-items-center">
          <p class="h4 col-12 text-white bg-primary py-3">大大大優惠!!</p>
          <p class="h5 col-12 py-3 text-dark">
            輸入折扣碼
            <strong class="text-white bg-success p-1 rounded-2">big777</strong>
            即可享有77折優惠
          </p>
        </div>
      </div>
      <div class="row justify-content-end input-group mx-0">
        <!-- <label for="codeInput" class="col-10 col-md-4">輸入折扣碼</label> -->
        <input
          type="text"
          class="col-12 col-md-6 border border-primary"
          placeholder="請輸入優惠碼"
          id="codeInput"
          v-model="code"
        />
        <button
          type="button"
          class="col-12 col-md-3 btn btn-primary mx-0"
          @click="useCoupon"
        >
          使用折扣碼
        </button>
      </div>
      <div class="text-end my-4">
        <router-link class="btn btn-success h4" to="/order">
          <span class="h5">前往填寫訂購資料</span>
          <i class="bi bi-arrow-right-circle-fill ms-1 h4"></i>
        </router-link>
      </div>
    </div>
    <div class="row justify-content-center py-5 text-center" v-else>
      <div class="col-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          fill="currentColor"
          class="bi bi-cart-x text-secondary"
          viewBox="0 0 16 16"
        >
          <path
            d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"
          />
          <path
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          />
        </svg>
      </div>
      <div class="col-12">
        <h4 class="my-3 h4 text-dark">購物車內空空如也，去買點喜歡的東西吧</h4>
        <router-link to="/products">
          <button type="button" class="btn btn-primary h4" style="width: 9rem">
            前往選購<i class="bi bi-arrow-right-circle-fill ms-2 h4"></i>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPic from '@/components/Front/HeaderPic.vue'
import Loading from '@/components/Loading.vue'

export default {
  data () {
    return {
      title: '購買清單',
      code: '',
      isLoading: '',
      isReady: false,
      qty: 1,
      cartData: {},
      cartLength: 0
    }
  },
  components: {
    HeaderPic,
    Loading
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then(res => {
          this.cartData = res.data.data
          this.cartLength = this.cartData.carts.length
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
        })
    },
    updateCartItem (cart) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${cart.id}`
      const update = {
        product_id: cart.id,
        qty: cart.qty
      }
      this.$http
        .put(url, { data: update })
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getCart()
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
        })
    },
    removeCartItem (cartID) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${cartID}`
      this.isLoading = cartID
      this.$http
        .delete(url)
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getCart()
          this.isLoading = ''
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
          this.isReady = true
        })
    },
    clearAllCart () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.isLoading = 'clear'
      this.$http
        .delete(url)
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getCart()
          this.isLoading = ''
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
          this.isReady = true
        })
    },
    useCoupon () {
      this.isReady = false
      const code = this.code
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      this.$http
        .post(url, { data: { code } })
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getCart()
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
          this.isReady = true
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
