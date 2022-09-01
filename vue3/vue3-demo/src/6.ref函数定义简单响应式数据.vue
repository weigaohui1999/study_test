<template>
  <div class="container">
  </div>
</template>

<script>
// 导入钩子函数
import {onBeforeMount, onMounted, reactive, ref, toRef, toRefs} from "vue";

export default {
  name: "App",
  setup() {
    // 1.ref常用于定义简单数据类型的响应式数据，也可以定义复杂数据类型的响应式书库

    const name = ref('ls')
    const age = ref(18)

    const updateNmae = () => {
      // 修改简单响应式数据的值
      name.value = '李四'
      console.log(name)
    }
    return { name, age, updateNmae }
  }
}
</script>

<style scoped>

</style>
