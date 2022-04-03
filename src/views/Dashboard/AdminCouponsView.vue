<template>
  <Loading :is-ready="isReady"></Loading>
  <div class="container">
    <p class="h2 text-center my-4">
      <span class="text-dark bg-secondary">優惠活動</span>
    </p>

    <div class="row justify-content-center">
      <div class="col-10">
        <div class="text-end mt-4">
          <button
            class="btn btn-success"
            type="button"
            @click="openCouponModal(true)"
          >
            建立新的優惠券
          </button>
        </div>
        <!-- Deaktop View -->
        <table class="table mt-4 d-none d-md-table">
          <thead>
            <tr>
              <th>名稱</th>
              <th>折扣百分比</th>
              <th>到期日</th>
              <th>是否啟用</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(coupon, key) in coupons" :key="key">
              <td>{{ coupon.title }}</td>
              <td>{{ coupon.percent }}%</td>
              <td>{{ $filters.timeConvert(coupon.due_date) }}</td>
              <td>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        :id="`enableSwitch${coupon.id}`"
                        v-model="coupon.is_enabled"
                        :true-value="1"
                        :false-value="0"
                        @change="updateEnableStatus(coupon)"
                      />
                      <label
                        class="form-check-label"
                        :for="`enableSwitch${coupon.id}}`"
                      >
                      </label>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <span class="text-primary" v-if="coupon.is_enabled"
                      >啟用中</span
                    >
                    <span class="text-muted" v-else>未啟用</span>
                  </div>
                </div>
                <!-- <span v-if="coupon.is_enabled === 1" class="text-success"
                  >啟用</span
                >
                <span v-else class="text-muted">未啟用</span> -->
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-success btn-sm"
                    @click="openCouponModal(false, coupon)"
                  >
                    編輯
                  </button>
                  <button
                    class="btn btn-outline-primary btn-sm"
                    @click="openDelCouponModal(coupon)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Mobile View -->
        <table class="table mt-4 align-middle d-table d-md-none">
          <tbody v-for="(coupon, key) in coupons" :key="key">
            <tr>
              <th>名稱</th>
              <td>{{ coupon.title }}</td>
            </tr>
            <tr>
              <th>折扣百分比</th>
              <td>{{ coupon.percent }}%</td>
            </tr>
            <tr>
              <th>到期日</th>
              <td>{{ $filters.timeConvert(coupon.due_date) }}</td>
            </tr>
            <tr>
              <th>是否啟用</th>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`enableSwitch${coupon.id}`"
                    v-model="coupon.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    @change="updateEnableStatus(coupon)"
                  />
                  <label
                    class="form-check-label"
                    :for="`enableSwitch${coupon.id}}`"
                  >
                  </label>
                  <span class="text-primary" v-if="coupon.is_enabled"
                    >啟用中</span
                  >
                  <span class="text-muted" v-else>未啟用</span>
                </div>
              </td>
            </tr>
            <tr>
              <th>操作</th>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-success btn-sm"
                    @click="openCouponModal(false, coupon)"
                  >
                    編輯
                  </button>
                  <button
                    class="btn btn-outline-primary btn-sm"
                    @click="openDelCouponModal(coupon)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <CouponModal
    :coupon="tempCoupon"
    :is-new="isNew"
    ref="couponModal"
    @update-coupon="updateCoupon"
  />
  <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon" />
</template>

<script>
import CouponModal from '@/components/Dashboard/CouponModal.vue'
import DelModal from '@/components/Dashboard/DelModal.vue'
import Loading from '@/components/Loading.vue'

export default {
  props: {
    config: Object
  },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isReady: true,
      isNew: false
    }
  },
  components: {
    CouponModal,
    DelModal,
    Loading
  },
  inject: ['emitter'],
  methods: {
    getCoupons () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http
        .get(url, this.tempProduct)
        .then(res => {
          this.coupons = res.data.coupons
          this.isReady = true
        })
        .catch(err => {
          this.isReady = true
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
        })
    },
    updateCoupon (tempCoupon) {
      this.isReady = false
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethos = 'post'
      let data = tempCoupon

      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        httpMethos = 'put'
        data = this.tempCoupon
      }

      this.$http[httpMethos](url, { data })
        .then(res => {
          this.isReady = true
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        })
        .catch(err => {
          this.isReady = true
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
        })
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isReady = false
      this.$http
        .delete(url)
        .then(res => {
          this.isReady = true
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.$refs.delModal.hideModal()
          this.getCoupons()
        })
        .catch(err => {
          this.isReady = true
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
        })
    },
    updateEnableStatus (coupon) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${coupon.id}`
      this.$http
        .put(url, { data: coupon })
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getCoupons()
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
      this.$refs.couponModal.hideModal()
    },
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.openModal()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.delModal.openModal()
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
