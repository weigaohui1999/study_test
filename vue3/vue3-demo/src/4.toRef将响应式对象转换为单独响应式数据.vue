<template>
  <div class="container">
    {{ name }}
    <button @click="updateNmae">修改名字</button>
  </div>
</template>

<script>
// 导入钩子函数
import {onBeforeMount, onMounted, reactive, toRef} from "vue";

export default {
  name: "App",
  setup() {
    // 1. 响应式数据
    const obj = reactive({
      name: '张三',
      age: 18
    })

    // 2.模板中使用name数据 从响应式数据对象中解构出的属性数据，不在是响应式数据
    // let { name } = obj  普通数据
    const name = toRef(obj, 'name')
    console.log(name)
    const updateNmae = () => {
      console.log('updateNmae', )
      name.value = '李四'
    }
    return { name, updateNmae }
  }
}
</script>

<style scoped>

</style>
