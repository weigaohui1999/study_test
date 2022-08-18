<template>
  <div id="app">
    <catagtory />
    <new-list />
  </div>
</template>

<script>
import Catagtory from './components/catagtory'
import NewList from './components/new-list'
export default {
  name: 'App',
  components: {
    Catagtory, NewList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
