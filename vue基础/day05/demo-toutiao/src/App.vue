<template>
  <div>
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>

    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">้ฆ้กต</van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends">ๆ็</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
</style>
