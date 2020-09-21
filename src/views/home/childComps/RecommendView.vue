<template>
  <div class="recommdens">
    <div v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []    
      }
    }
  }
}
</script>

<style scoped>
.recommdens {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 10px;
  box-shadow: 0 10px 1px hsla(0, 1%, 37%, 0.102);
  padding-bottom: 30px;
}
img {
  width: 80px;
  height: 80px;
}
.text {
  font-size: 14px;
  margin-top: 10px;
}
</style>