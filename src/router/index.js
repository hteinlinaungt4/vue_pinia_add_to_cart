import AddToCart from '@/pages/AddToCart.vue'
import Home from '@/pages/Home.vue'
import Products from '@/pages/Products.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: route => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/add-to-cart',
      name: 'AddToCart',
      component: AddToCart,
    },
  ],
})

export default router
