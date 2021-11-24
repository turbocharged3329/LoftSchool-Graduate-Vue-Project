export default {
    namespaced: true,
    state: {
        user: {
            data: {}
        }
    },
    getters: {
        getUserData(state) {
            return state.user.data;
        }
    },
    mutations: {
        SET_USER_DATA(state, data) {
            return state.user.data = data;
        }
    },
}