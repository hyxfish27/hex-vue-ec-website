<template>
  <Loading :is-ready="isReady"></Loading>
  <HeaderPic :title="title"></HeaderPic>
  <div class="container">
    <h3 class="h3 text-center mt-4">購物車</h3>
    <div class="my-5 row justify-content-center">
      <Form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="createOrder"
      >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required|min:8|max:10"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger" @click="createOrder">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import HeaderPic from '@/components/Front/HeaderPic.vue'
import Loading from '@/components/Loading.vue'

export default {
  data () {
    return {
      title: '填寫訂單',
      isReady: true,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: { HeaderPic, Loading },
  inject: ['emitter'],
  methods: {
    createOrder () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http
        .post(url, { data: order })
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_USER_SUCCESS}`
          })
          this.$router.push(`/order/${res.data.orderId}`)
          this.$refs.form.resetForm()
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_USER_FAIL}`
          })
          this.isReady = true
        })
    }
  }
}
</script>
