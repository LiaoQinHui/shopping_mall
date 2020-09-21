<template>
  <nav-bar class="nav-bar"><div slot="centre">购物街</div></nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'

export default {
 name: "Home",
 components: {
  NavBar
 },
 data() {
  return {
    banners: [],
    recommends: []
  }
 },
 created() {
  getHomeMultidata().then(res => {
    this.banners = res.data.banner.list;
    this.recommends = res.data.recommend.list
  })
 }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>