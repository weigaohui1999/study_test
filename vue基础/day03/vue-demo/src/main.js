import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Count from '@/components/Count.vue'


Vue.config.productionTip = false

// 全局注册组件 'Mycount' 为组件名 ， Count 为导入时的命名
Vue.component('MyCount', Count)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
