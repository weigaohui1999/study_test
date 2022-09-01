<template>
  <div class="container">
    hi
  </div>
</template>

<script>
// 导入钩子函数
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

export default {
  name: "App",
  setup() {
    //  1.DOM渲染前的钩子
    onBeforeMount(() => {
      console.log('DOM渲染前的钩子' + document.querySelector('.container'))
    })
    // 2. DOM渲染后的钩子
    onMounted(() => {
      console.log('DOM渲染后的钩子' + document.querySelector('.container'))
    })
    // 3. 更新组件前
    onBeforeUpdate(() => {
      console.log('更新组件钱')
    })
    // 4. 更新组件后
    onUpdated(() => {
      console.log('更新组件后')
    })
    // 5. 组件销毁前
    onBeforeUnmount(() => {
      console.log('组件销毁前')
    })
    // 6. 组件销毁后
    onUnmounted(() => {
      console.log('组件销毁后')
    })
    // 可以定义多个相同的钩子函数，区分不同的逻辑
  }
}
</script>

<style scoped>

</style>
