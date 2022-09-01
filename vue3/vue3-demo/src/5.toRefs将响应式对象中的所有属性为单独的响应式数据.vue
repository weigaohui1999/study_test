<template>
  <div class="container">
    {{ name }}
    {{ age }}
    <button @click="updateNmae">修改名字</button>
  </div>
</template>

<script>
// 导入钩子函数
import {onBeforeMount, onMounted, reactive, toRef, toRefs} from "vue";

export default {
  name: "App",
  setup() {
    const obj = reactive({
      name: '张三',
      age: 18
    })
    console.log(obj)
    const obj2 = toRefs(obj)
    console.log(obj2)

    const updateNmae = () =>{
      obj.name = '李四'
    }
    return { ...obj2, updateNmae }
  }
}
</script>

<style scoped>

</style>
