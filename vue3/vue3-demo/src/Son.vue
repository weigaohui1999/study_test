<template>
  <div>
    <h1>这是子组件</h1>
    {{ money }}
    <button @click="fn">改变</button>
  </div>
</template>

<script>
export default {
  name: "Son",
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  setup(props, {emit}) {
    const fn = () => {
      emit('update:modelValue', 200)
    }
    return{ fn }
  }
}
</script>

<style scoped>

</style>
