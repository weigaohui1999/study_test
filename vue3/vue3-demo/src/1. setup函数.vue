<template>
  <div class="container">
    hi
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {
    console.log(this)
    const msg = '我爱你'
    const say = () =>{
      console.log('我会唱歌')
    }

    return { msg, say }
  },
  beforeCreate() {
    console.log(this)
  }
}
</script>

<style scoped>

</style>
