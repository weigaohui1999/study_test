<template>
  <div class="container">
    <div>
      <h1>父组件</h1>
      <div>{{ money }}</div>
    </div>
    <hr>
    <div>
<!--      <son :money="money" @change-money="updataMoney"/>-->
      <!--   实现子父组件双向数据绑定的另一种方式   -->
      <son v-model:money="money"/>
    </div>
  </div>
</template>

<script>
import Son from "./11.父子通信-Son.vue";
// 导入钩子函数
import {computed, onBeforeMount, onMounted, onUnmounted, reactive, ref, toRef, toRefs, watch} from "vue";
export default {
  name: "App",
  components: { Son },
  setup() {
    // 父组件的数据传递给子组件
    const money = ref(100)

    const updataMoney = (value) => {
      money.value = value
    }
    return { money, updataMoney }
  }
}
</script>

<style scoped>

</style>
