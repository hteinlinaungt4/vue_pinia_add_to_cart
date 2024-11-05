<template>
  <MasterPage>
    <div class="container-fluid mt-5">
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Product Title</th>
            <th>Product Description</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cart in cartstore.cart" :key="cart.id">
            <td>{{ cart.title }}</td>
            <td>{{ cart.description }}</td>
            <td>{{ cart.qty }}</td>
            <td>
              <button
                class="btn btn-danger"
                @click="cartstore.removeFromCart(cart.id)"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </MasterPage>
</template>

<script>
import MasterPage from '@/Layouts/Master.vue'
import { useCartStore } from '@/stores/cart'

export default {
  components: { MasterPage },
  setup() {
    const cartstore = useCartStore()
    return { cartstore } // Return the whole store to access cart and functions directly
  },
}
</script>
