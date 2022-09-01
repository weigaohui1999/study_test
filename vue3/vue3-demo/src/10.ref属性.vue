<template>
  <div class="container">

    <!--    ref 获取单个元素    -->
    <div ref="box"> 我是box </div>

    <ui>
      <li v-for="i in 4" :key="i" ref="setDom">我是第{{ i }}个LI</li>
    </ui>
  </div>
</template>

<script>
// 导入钩子函数
import {computed, onBeforeMount, onMounted, onUnmounted, reactive, ref, toRef, toRefs, watch} from "vue";
export default {
  name: "App",
  setup() {
    // 获取单个元素
    // 先定义一个空的响应式数据ref定义
    // setup返回改数据，你想获取哪个dom元素，在该元素上使用ref属性绑定fail数据
    const box = ref(null)
    onMounted(() => {
      console.log(box.value)
    })

    // 获取获取v-for遍历的元素
    // 定义一个空数组，接收所有的LI
    // 定义一个函数，往空数组插入DOM
    const domList = []
    const setDom = (el) => {
      domList.push(el)
    }
    console.log(domList)
    return { box, setDom }
  }
}
</script>

<style scoped>

</style>
