<template>
  <ul class="catagtory">
    <li :class='{ select: item.id === currentCatagtory }' v-for="item in catagtory" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'catagtory',
  computed: {
    ...mapGetters(['catagtory', 'currentCatagtory'])
  },
  created () {
    this.$store.dispatch('catagtory/getCatagtory')
  }
}
</script>

<style scoped>

</style>
