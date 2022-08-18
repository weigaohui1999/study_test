<template>
  <div class="box">
    <div>这是左边组件</div>
    <MyCount :init="6"></MyCount>
  </div>

</template>

<script>
import bus from '@/components/eventBus.js'

export default {
  name: "Left",
  components: {
    bus
  },
  data() {
    return {
      str: '我是你的兄弟啊',
    };
  },
  methods: {
    send() {
      this.$emit('share', this.str)
    }
  }
}
</script>

<style scoped>
.box {
  flex: 1;
}
</style>