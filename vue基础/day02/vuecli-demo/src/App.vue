<template>
  <div>
    {{ msg }}
    {{ obj.name }}
    {{ obj.age > 18 ? '成年' : '未成年' }}
  </div>
</template>

<script>


export default {
  data() {
    return {
      msg: 'hello, vue',
      obj: {
        name: '小vue',
        age: 5
      }
    }
  }
}
</script>

<style>
</style>
