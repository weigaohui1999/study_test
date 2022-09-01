<template>
  <div class="container">
    <div>{{count}}</div>
    <button @click="add">加1</button>

    <hr>
    <div>
      <p>{{ obj.name }}</p>
      <p>{{ obj.age }}</p>
    </div>
    <button @click="updataName">改变</button>
  </div>
</template>

<script>
// 导入钩子函数
import {computed, onBeforeMount, onMounted, onUnmounted, reactive, ref, toRef, toRefs, watch} from "vue";
export default {
  name: "App",
  setup() {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    // 监听数据的变化
    // 参数1：监听的目标
    // 参数2：改变后触发的函数
    watch(count,(newValue, oldValue)=> {
      console.log(newValue, oldValue)
    })

    const obj = reactive({
      name: '张三',
      age: 18
    })
    const updataName = () => {
      obj.name = 'ls'
    }
    watch(obj,(newValue, oldValue)=> {
      console.log(newValue.name, oldValue.name)
    })

    // 监听多个数据的变化
    watch([count, obj],()=>{
      console.log('监听多个数据的变化')
    })

    // 监听对象中的某个属性
    watch(() => obj.name,()=>{
      console.log('监听多个数据的变化')
    })

    // 深度监听和默认触发
    // 监听对象中的某个属性
    watch(() => obj.name,()=>{
      console.log('监听多个数据的变化')
    }, {
      //深度监听
      deep: true,
      //默认触发
      immediate: true
    })

    return {count, add, obj, updataName }
  }
}
</script>

<style scoped>

</style>
