<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        data-mdb-collapse-init
        class="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <router-link :to="'/'">
          <a class="navbar-brand mt-2 mt-lg-0" href="#"> Home </a>
        </router-link>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="'/products'">
              <a class="nav-link" href="#">Products</a>
            </router-link>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">
        <!-- Icon -->
        <router-link :to="'/add-to-cart'">
          <a class="link-secondary me-3" href="#">
            <i class="fas fa-shopping-cart"></i>
            <span class="badge rounded-pill badge-notification bg-danger">{{
              cartCount
            }}</span>
          </a>
        </router-link>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
export default {
  name: 'NavbarPage',
  setup() {
    const cartstore = useCartStore()
    const cartCount = computed(() => cartstore.cart.length)
    return { cartCount }
  },
}
</script>

<style lang="stylus" scoped></style>
