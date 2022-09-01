<template>
  <div class="container">
    {{ obj.name }}
    {{ obj.age }}
    <button @click="updateNmae">修改名字</button>
  </div>
</template>

<script>
// 导入钩子函数
import {onBeforeMount, onMounted, reactive} from "vue";

export default {
  name: "App",
  setup() {
    const obj = reactive({
      name: '张三',
      age: 18
    })
    const updateNmae = () => {
      console.log('updateNmae', )
      obj.name = '李四'
    }
    return { obj, updateNmae }
  }
}
</script>

<style scoped>

</style>
