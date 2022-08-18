export default {
    namespaced: true,
    state: {
        // 修改count的方法
        // 载荷  传输的参数
        count: 0,
        list: [1,2,3,4,5,6,7,8,9]
    },
    mutations: {
        addCount (state, payload) {
            state.count += payload
        }
    },
    actions: {
        // context 就是当前的store实例 this.$store.commit
        getAsyncCount(context, params) {
            setTimeout(function (){
                context.commit('addCount', params)
            }, 1000)
        }
    },
    getters: {
        filterList: state => state.list.filter(item => item > 2)
    }
}
