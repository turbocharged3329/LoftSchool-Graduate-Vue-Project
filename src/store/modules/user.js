import axios from 'axios';

export default {
    namespaced: true,
    state: {
        user: {
            data: {}
        },
        userLiked: {
            data: []
        }
    },
    getters: {
        getUserData(state) {
            return state.user.data;
        },
        getUserLikedRepos(state) {
            return state.userLiked.data;
        }
    },
    mutations: {
        SET_USER_DATA(state, data) {
            return state.user.data = data;
        },
        SET_LIKED_REPOS(state, data) {
            return state.userLiked.data = data;
        }
    },
    actions: {
        getUserLikedReposFromAPI({commit}) {
            return axios({
                url: "https://api.github.com/user/starred",
                method: "GET",
                headers: {
                  Authorization: `token ${localStorage.getItem("token")}`,
                },
              }).then((response) => {
                commit('SET_LIKED_REPOS', response.data);
              }); 
        }
    }
}