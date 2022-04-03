<template>
  <Loading :is-ready="isReady"></Loading>
  <HeaderPic :title="title"></HeaderPic>
  <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <p class="h3 text-center my-4">
        <span class="text-dark bg-secondary">訂單明細</span>
      </p>
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="text-end">{{ $filters.currency(item.final_total) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ $filters.currency(order.total) }}</td>
          </tr>
        </tfoot>
      </table>

      <p class="h3 text-center my-4">
        <span class="text-dark bg-secondary">顧客資料</span>
      </p>
      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button class="btn btn-success">
          沒問題，去結帳 <i class="bi bi-arrow-right-circle-fill ms-1 h5"></i>
        </button>
      </div>
      <div class="text-end" v-else>
        <router-link class="btn btn-primary text-white" to="/products">
          <span class="h6">繼續逛逛</span>
          <i class="bi bi-arrow-right-circle-fill ms-1 h5"></i>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import HeaderPic from '@/components/Front/HeaderPic.vue'

export default {
  data () {
    return {
      title: '訂購完成',
      order: {
        user: {},
        products: {}
      },
      orderId: '',
      isReady: false
    }
  },
  components: {
    Loading,
    HeaderPic
  },
  inject: ['emitter'],
  methods: {
    getOrder () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http
        .get(url)
        .then(res => {
          this.order = res.data.order
          this.isReady = true
        })
        .catch(() => {
          this.isReady = true
        })
    },
    payOrder () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http
        .post(url)
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.isReady = true
          this.getOrder()
        })
        .catch(err => {
          this.isReady = true
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_USER_FAIL}`
          })
        })
    }
  },
  mounted () {
    this.orderId = this.$route.params.id
    this.getOrder()
  }
}
</script>
