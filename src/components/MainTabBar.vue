<template>
  <div>
    <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../assets/img/tabbar/index.png" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/index_selected.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="../assets/img/tabbar/category.png" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/category_selected.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="../assets/img/tabbar/cart.png" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/cart_selected.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/user.png" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/user_selected.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
 name: 'MainTabBar',
 components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>