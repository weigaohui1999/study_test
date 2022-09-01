<template>
  <h1>子组件</h1>
  <div>{{money}}</div>
  <button @click="changeMoney">花50块钱</button>
</template>

<script>
export default {
  name: "Son",
  // 子组件接收父组件数据
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    // 子组件接收父组件数据
    // props 用于接收父组件传来的数据
    // context.emit方法 用于通知父组件, 触发自定义事件，传入参数
    console.log(props.money)
    console.log(context)
    const changeMoney = () => {
      // 通知父组件, 触发自定义事件，传入参数
      // context.emit('change-money', 50)
      // 实现子父组件双向数据绑定的另一种方式
      context.emit('update:money', 50)
    }
    return { changeMoney }
  }
}
</script>

<style scoped>

</style>
