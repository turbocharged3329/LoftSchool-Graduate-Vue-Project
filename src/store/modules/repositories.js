import axios from "axios";

export default {
  namespaced: true,
  state: {
    repositories: {
      data: {},
    },
  },
  getters: {
    getRepositories(state) {
        return state.repositories.data;
    }
  },
  mutations: {
    SET_REPOS_TO_STATE(state, data) {
        const repositories = [];

        for (let item of data.items) {      
              repositories.push({
                name: item.owner.login,
                avatar: item.owner.avatar_url,
                profession: item.language,
                description: item.description,
                forks: item.forks_count,
                stars: item.watchers_count,
                issues: [],
                issues_url: item.open_issues > 0 
                ? item.issues_url.replace('{/number}', '')
                : null
              })
        }
      return state.repositories.data = repositories;
    },
  },
  actions: {
    getRepositoriesFromApi({ commit }, payload) {
      const queryParams = new URLSearchParams();
      queryParams.append("order", "desc");
      queryParams.append("sort", "start");
      queryParams.append("q", "language:javascript created:>" + payload);
      queryParams.append("per_page", 10);

      return axios({
        url: "/search/repositories",
        method: "GET",
        baseURL: "https://api.github.com",
        params: queryParams,
      }).then((response) => {
          commit('SET_REPOS_TO_STATE', response.data);
      });
    },
  },
};
