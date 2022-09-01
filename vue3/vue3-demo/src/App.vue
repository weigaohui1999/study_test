<template>
  <div class="container">
    <h2 @click="$event.target.style.color = 'red'">父组件</h2>
    <p> {{ count }}</p>
    <hr>
    <!--  $event 代表绑定的自定义事件的传参  -->
    <!-- <son :modelValue="count" @update:modelValue="count=$event"/>-->
    <son v-model="count"/>
  </div>
</template>

<script>
import Son from "./Son.vue";
import {provide, ref} from "vue";
export default {
  name: "App",
  components: {Son},
  setup() {
    const count = ref(100)
    return { count }
  }
}
</script>

<style scoped>

</style>
