import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // 前台
    path: '/',
    component: () => import('../views/LayoutView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/FrontView.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/UserProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/SingleProductView.vue')
      },
      // {
      //   path: 'cart',
      //   component: () => import('../views/CartView.vue')
      // },
      {
        path: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/LoginView.vue')
      }
    ]
  },
  {
    // 後台
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Dashboard/AdminProductsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
