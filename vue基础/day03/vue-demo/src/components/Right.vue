<template>
<div  class="box">
  <div>这是右边组件</div>
  <MyCount :init="9"></MyCount>
</div>
  
</template>

<script>
export default {
  name: "Right"
}
</script>

<style scoped>
  .box{
    flex: 1;
  }
</style>