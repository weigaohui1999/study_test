<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{ money }}</p>
    <hr />
    <grand-son />
  </div>
</template>

<script>
import GrandSon from "./12.注入依赖-GrandSon.vue";
import {inject} from "vue";
export default {
  name: "Son",
  components: {GrandSon},
  setup() {
    // 子代组价通过inject注入 数据
    const money = inject('money')
    return {money}
  }
}
</script>

<style scoped>

</style>
