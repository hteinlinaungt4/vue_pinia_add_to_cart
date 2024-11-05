<template>
  <MasterPage>
    <div class="container-fluid mt-5">
      <div class="row">
        <Products
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="col-12 mb-3"
        />
      </div>
    </div>
  </MasterPage>
</template>

<script>
import MasterPage from '../Layouts/Master.vue'
import Products from '@/components/Products.vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
export default {
  name: 'ProductPage',
  components: {
    MasterPage,
    Products,
  },
  setup() {
    // Step 1: Access the cart store
    const cartStore = useCartStore()

    // Step 2: Use storeToRefs to make products reactive
    const { products } = storeToRefs(cartStore)

    // Step 3: Load products when the component is mounted
    onMounted(() => {
      cartStore.loadProducts()
    })

    // Step 4: Return products and addToCart for template access
    return { products }
  },
}
</script>

<style lang="stylus" scoped></style>
