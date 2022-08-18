import axios from 'axios'

export default {
  // 开启命名空间，不能直接访问的访问子模块
  namespaced: true,
  state: {
    catagtory: [],
    currentCatagtory: null
  },
  mutations: {
    updateCatagtory (state, payload) {
      state.catagtory = payload
    },
    updatecurrentCatagtory (state, payload) {
      state.catagtory = payload
    }
  },
  actions: {
    async getCatagtory (context) {
      const { data: { data: { channels } } } = await axios.get('http://ttapi.research.itcast.cn/app/v1_0/channels')
      context.commit('updateCatagtory', channels)
      context.commit('updatecurrentCatagtory', channels[0].id)
    }
  }
}
