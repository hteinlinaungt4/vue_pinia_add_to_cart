import ProductServices from '@/services/ProductServices'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
    cart: [],
    totalEvents: 0,
  }),
  actions: {
    async loadProducts() {
      try {
        const res = await ProductServices.fetchProducts(2)
        console.log(res.data)

        this.products = res.data
        this.totalEvents = res.headers['x-total-count'] // if headers are relevant
      } catch (error) {
        console.error(error)
      }
    },
    addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.qty += 1
      } else {
        this.cart.push({ ...product, qty: 1 })
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(item => item.id !== id)
    },
  },
})
