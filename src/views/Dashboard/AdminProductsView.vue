<template>
  <Loading :is-ready="isReady"></Loading>
  <div class="container">
    <p class="h2 text-center my-4">
      <span class="text-dark bg-secondary">產品列表</span>
    </p>
    <div class="row justify-content-center">
      <div class="col-12">
        <!-- Add Product Button -->
        <div class="text-end mt-4">
          <button class="btn btn-success text-white" @click="openModal('new')">
            建立新的產品
          </button>
        </div>
        <!-- Product list (DeskTop View) -->
        <table class="table mt-4 d-none d-md-table">
          <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                狀態
              </th>
              <th width="120">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.category }}</td>
              <td>{{ product.title }}</td>
              <td class="text-end">
                {{ $filters.currency(product.origin_price) }}
              </td>
              <td class="text-end">{{ $filters.currency(product.price) }}</td>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`enableSwitch${product.id}`"
                    v-model="product.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    @change="updateEnableStatus(product)"
                  />
                  <label
                    class="form-check-label"
                    :for="`enableSwitch${product.id}}`"
                  >
                    <span class="text-primary" v-if="product.is_enabled"
                      >上架</span
                    >
                    <span class="text-light" v-else>下架</span>
                  </label>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-success btn-sm"
                    @click="openModal('edit', product)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    @click="openDelModal(product)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Product list (Mobile View) -->
        <table class="table mt-4 d-table d-md-none">
          <tbody v-for="product in products" :key="product.id">
            <tr>
              <th>分類</th>
              <td>{{ product.category }}</td>
            </tr>
            <tr>
              <th>名稱</th>
              <td>{{ product.title }}</td>
            </tr>
            <tr>
              <th>原價</th>
              <td>{{ $filters.currency(product.origin_price) }}</td>
            </tr>
            <tr>
              <th>售價</th>
              <td>{{ $filters.currency(product.price) }}</td>
            </tr>
            <tr>
              <th>狀態</th>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`enableSwitch${product.id}`"
                    v-model="product.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    @change="updateEnableStatus(product)"
                  />
                  <label
                    class="form-check-label"
                    :for="`enableSwitch${product.id}}`"
                  >
                    <span class="text-primary" v-if="product.is_enabled"
                      >上架</span
                    >
                    <span class="text-light" v-else>下架</span>
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <th>操作</th>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-success btn-sm"
                    @click="openModal('edit', product)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    @click="openDelModal(product)"
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
    <!-- Pagination -->
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    <!-- Admin Product Modal -->
    <!-- ref 用來抓取要執行的 modal 元件 -->
    <ProductModal
      :temp-product="tempProduct"
      :is-new="isNew"
      @add-product="addProduct"
      @update-product="updateProduct"
      ref="ProductModal"
    ></ProductModal>
    <!-- Delete Product Modal -->
    <DelModal
      :del-item="tempProduct"
      @remove-item="removeProduct"
      @get-items="getProducts"
      ref="delModal"
    ></DelModal>
  </div>
</template>

<script>
import ProductModal from '@/components/Dashboard/ProductModal.vue'
import DelModal from '@/components/Dashboard/DelModal.vue'
import Pagination from '@/components/Pagination.vue'
import Loading from '@/components/Loading.vue'

export default {
  data () {
    return {
      products: [],
      productId: '',
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      isReady: false,
      pagination: {},
      productModal: '',
      delModal: ''
    }
  },
  inject: ['emitter'],
  components: {
    ProductModal,
    DelModal,
    Pagination,
    Loading
  },
  methods: {
    // Products Execution Start
    getProducts (page = 1) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http
        .get(url)
        .then(res => {
          this.products = res.data.products
          this.pagination = res.data.pagination
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
    addProduct () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      this.$http
        .post(url, { data: this.tempProduct })
        .then(res => {
          this.getProducts()
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
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
      this.$refs.ProductModal.hideModal()
    },
    updateProduct () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http
        .put(url, { data: this.tempProduct })
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getProducts(this.pagination.current_page)
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
      this.$refs.ProductModal.hideModal()
    },
    removeProduct (id) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      this.$http
        .delete(url)
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getProducts(this.pagination.current_page)
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
      this.$refs.delModal.hideModal()
    },
    updateEnableStatus (product) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`
      this.$http
        .put(url, { data: product })
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getProducts(this.pagination.current_page)
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
    // Products Execution End

    // Modal Execution Start
    openModal (modal, product = '') {
      if (modal === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
      } else if (modal === 'edit') {
        this.tempProduct = { ...product }
        this.isNew = false
      }
      // modalMixin 下的 openModal() 方法
      this.$refs.ProductModal.openModal()
    },
    openDelModal (product) {
      this.tempProduct = { ...product }
      // modalMixin 下的 openModal() 方法
      this.$refs.delModal.openModal()
    }
    // Modal Execution End
  },
  mounted () {
    this.getProducts()
  }
}
</script>
