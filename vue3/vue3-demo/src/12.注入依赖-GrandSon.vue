<template>
  <h2>后代组件 {{money}}</h2>
  <button @click="fn">消费</button>
</template>

<script>
import {inject} from "vue";

export default {
  name: "GrandSon",
  setup() {
    // 后代组价通过inject注入 数据
    const money = inject('money')
    // 后组件通过父组件注入的函数更改父组件数据
    const changeMoney = inject('changeMoney')

    const fn = () => {
      changeMoney(20)
    }
    return {money,fn}
  }
}
</script>

<style scoped>

</style>
