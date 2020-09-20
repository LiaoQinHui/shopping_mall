<template>
  <nav-bar class="nav-bar"><div slot="centre">购物街</div></nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
 name: "Home",
 components: {
  NavBar
 }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>