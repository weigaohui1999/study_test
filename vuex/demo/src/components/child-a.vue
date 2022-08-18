<template>
  <div>
    <button @click="add">+1原始模式</button>
    <button @click="addCount(100)">+100辅助函数</button>

    <button @click="add1">+1异步原始模式</button>
    <button @click="getAsyncCount(100)">+100异步辅助函数</button>

    <div>gitter原始模式: {{ $store.getters.filterList }}</div>
    <div>gitter辅助函数: {{ filterList }}</div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "child-a",
  computed: {
    ...mapGetters(['filterList'])
  },
  methods: {
    add() {
      console.log(this.$store)
      this.$store.commit('addCount', 1)
    },
    add1() {
      this.$store.dispatch('getAsyncCount', 1)
    },
    ...mapMutations(['addCount']),
    ...mapActions(['getAsyncCount']),
  }
}
</script>

<style scoped>

</style>
