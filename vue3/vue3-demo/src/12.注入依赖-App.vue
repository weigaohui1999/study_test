<template>
  <div class="container">
    <h2>父组件</h2>
    <p> {{ money }}</p>
    <hr>
    <son />
  </div>
</template>

<script>
import Son from "./12.注入依赖-Son.vue";
import {provide, ref} from "vue";
export default {
  name: "App",
  components: {Son},
  setup() {
    const money = ref(100)
    // 将数据提供给后代组件 provide
    provide('money', money)

    const changeMoney = (value) => {
      money.value = money.value - value
    }
    // 将函数提供飞后代组件使用 provide
    provide('changeMoney', changeMoney)
    return {money}
  }
}
</script>

<style scoped>

</style>
