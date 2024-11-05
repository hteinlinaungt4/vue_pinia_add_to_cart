<template>
  <div class="col-md-4">
    <div
      class="card border border-success shadow-0 mb-3 mx-auto"
      style="max-width: 25rem"
    >
      <div
        class="card-header text-center bg-transperent mx-auto border-success"
      >
        <div style="width: 300px">
          <img
            style="object-fit: cover"
            width="100%"
            height="300"
            :src="product.image"
            alt=""
          />
        </div>
      </div>
      <div class="card-body text-success" style="overflow: auto">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text" style="height: 100px">
          {{ product.description }}
        </p>
      </div>
      <div class="card-footer bg-transparent border-success">
        <button class="btn btn-primary" @click="addToCart(product)">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'ProductPage',
  props: ['product'],
  setup() {
    const cartStore = useCartStore()

    // Using addToCart directly from the store
    const addToCart = product => {
      cartStore.addToCart(product)
    }

    return { addToCart }
  },
}
</script>

<style lang="stylus" scoped></style>
