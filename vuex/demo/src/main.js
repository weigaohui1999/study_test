import Vue from 'vue'
import App from './App.vue'
import store from "@/store"; // 实例化一个Store对象
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
