    import Vuex from 'vuex'
    import Vue from 'vue'
    import count from '@/store/count/count'
    import user from '@/store/user/user'
    Vue.use(Vuex)

    // 引入vuex包
     // 注册vuex包
    export default new Vuex.Store({
        // 放置配置选项
        state: {

        },
        mutations: {


        },
        actions: {

        },
        // vuex的计算属性
        getters: {
            count: state => state.count.count,
            list: state => state.count.list,
            // filterList: state => state.count.list.filter(item => item > 2)
        },
        module: {
            count,
            user
        }
    })
