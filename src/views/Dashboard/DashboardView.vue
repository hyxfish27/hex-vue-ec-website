<template>
  <div class="d-flex flex-column min-vh-100">
    <DashboardNav></DashboardNav>
    <router-view v-if="adminStatus" />
    <DashboardFooter class="mt-auto"></DashboardFooter>
  </div>
</template>

<script>
import DashboardNav from '@/components/Dashboard/DashboardNav.vue'
import DashboardFooter from '@/components/Dashboard/DashboardFooter.vue'

export default {
  data () {
    return {
      adminStatus: false
    }
  },
  components: {
    DashboardNav,
    DashboardFooter
  },
  inject: ['emitter'],
  methods: {
    checkAdmin () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      // token 存在，存取登入權限
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        const url = `${process.env.VUE_APP_API}/api/user/check`
        this.$http
          .post(url)
          .then(() => {
            this.adminStatus = true
          })
          .catch(err => {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: err.response.data.message,
              emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
            })
            // alert(err.data.message)
            this.$router.replace('/login')
          })
      } else {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: '請重新登入 > <',
          emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
        })
        this.$router.push('/login')
      }
    }
    // 登出寫在 Navbar
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
