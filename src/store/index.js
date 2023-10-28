import { createStore } from 'vuex'

export default createStore({
    state: {
        ministries: false
    },
    getters: {
        getMinistry(state){
            return state.ministries
        }
    },
    mutations: {

    },
    actions: {

    }
})