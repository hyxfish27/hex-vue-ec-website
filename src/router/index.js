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
        name: 'UserProducts',
        component: () => import('../views/UserProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'UserProduct',
        component: () => import('../views/SingleProductView.vue')
      },
      {
        path: 'cart',
        name: 'UserCart',
        component: () => import('../views/UserCartView.vue')
      },
      {
        path: 'order',
        name: 'UserOrder',
        component: () => import('../views/UserOrderView.vue')
      },
      {
        path: 'order/:id',
        name: 'UserCheckout',
        component: () => import('../views/UserCheckoutView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/LoginView.vue')
      },
      {
        path: 'favorite',
        name: 'Favorite',
        component: () => import('../views/FavoriteView.vue')
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
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/Dashboard/AdminOrdersView.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/Dashboard/AdminCouponsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
