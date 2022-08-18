import Vue from 'vue'
import Vuex from 'vuex'
import catagtory from '@/store/modules/catagtory'
import newList from '@/store/modules/new-list'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    // 建立快捷访问子模块的state里面的数据
    catagtory: state => state.catagtory.catagtory,
    currentCatagtory: state => state.catagtory.currentCatagtory,
    currentList: state => state.newList.allData[state.catagtory.currentCatagtory] || []
  },
  mutations: {
  },
  actions: {
  },
  // 模块化
  modules: {
    catagtory,
    newList
  }
})
