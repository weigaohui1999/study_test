import axios from 'axios'
export default {
  namespaced: true,
  state: {
    allData: {}
  },
  mutations: {
    updateList (state, { currentCatagtory, list }) {
      state.allData = { ...state.allData, [currentCatagtory]: list }
    }
  },
  actions: {
    async getNewList (context, cataId) {
      const { data: { data: { results } } } = await axios.get(`http://ttapi.research.itcast.cn/app/v1_1/articles?channel_id=${cataId}&timestamp=${Date.now()}&with_top=1`)
      context.commit('updateList', { currentCatagtory: cataId, list: results })
    }
  }
}
