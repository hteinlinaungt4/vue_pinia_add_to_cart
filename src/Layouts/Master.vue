<template>
  <div>
    <Navbar />
    <slot></slot>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'MasterPage',
  components: {
    Navbar,
  },
}
</script>

<style lang="stylus" scoped></style>
