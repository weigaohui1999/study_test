import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)
const TOKEN_KEY = 'TOUTIAO_USER'
export default new Vuex.Store({
  state: {
    // 存放用户登录信息（token 等数据）
    user: getItem(TOKEN_KEY)
  },
  getters: {
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 持久化操作防止刷新后数据丢失
      setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
