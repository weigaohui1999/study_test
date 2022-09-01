<template>
  <div className="container">
    坐标是
    {{ x }}
    {{ y }}

    <hr>

    <div>{{ count }}</div>
    <button @click="add">点击加1</button>
  </div>
</template>

<script>
// 导入钩子函数
import {onBeforeMount, onMounted, onUnmounted, reactive, ref, toRef, toRefs} from "vue";
export default {
  name: "App",
  setup() {
    const mouse = reactive({
      x: 0, y: 0
    })
    const move = (e) => {
      mouse.x = e.pageX
      mouse.y = e.pageY
    }
    onMounted(() => {
      document.addEventListener('mousemove', move)
    })
    onUnmounted(() => {
      document.removeEventListener('mousemove', move)
    })

    const count = ref(0)

    const add = () => {
      count.value++
    }

    return {...toRefs(mouse), add, count}
  }
}
</script>

<style scoped>

</style>
