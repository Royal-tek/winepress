import { createStore } from 'vuex'

export default createStore({
    state: {
        ministries: false,
        give: false
    },
    getters: {
        getMinistry(state){
            return state.ministries
        },
        getGive(state){
            return state.give
        }
    },
    mutations: {

    },
    actions: {

    }
})