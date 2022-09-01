<template>
  <div class="container">
    <div>今年： {{age}}岁</div>
    <div>后年： {{newAge}}岁</div>

    <input type="text" v-model="newAge">
  </div>
</template>

<script>
// 导入钩子函数
import {computed, onBeforeMount, onMounted, onUnmounted, reactive, ref, toRef, toRefs} from "vue";
export default {
  name: "App",
  setup() {
    // 1. 计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到的一个新的数据
    const age = ref(18)
    // const newAge = computed(() => {
    //   return age.value + 2
    // })
    const newAge = computed({
      // get 获取计算属性的值
      get() {
        return age.value + 2
      },
      // set 监听计算属性改变
      set(value) {
        return age.value = value - 2
      }
    })

    return { age, newAge}
  }
}
</script>

<style scoped>

</style>
