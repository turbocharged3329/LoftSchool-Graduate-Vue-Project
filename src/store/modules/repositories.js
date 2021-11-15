import axios from "axios";

export default {
  namespaced: true,
  state: {
    repositories: {
      data: [],
    },
  },
  getters: {
    getRepositories(state) {
        return state.repositories.data;
    },
  },
  mutations: {
    SET_REPOS_TO_STATE(state, data) {
        const repositories = [];

        for (let item of data.items) {      
              repositories.push({
                id: item.id,
                name: item.owner.login,
                repo_name: item.name,
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

    SET_README_TO_STATE_REPO(state, data) {
      return state.repositories.data.find(repo => repo.id == data.id).readme = data.content;
    }
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

    getRepoReadmeFromApi({commit}, payload) {
      const contentFormat = 'application/vnd.github.v3.html+json';
      return axios({
        url: `/repos/${payload.owner}/${payload.repo}/readme`,
        method: 'GET',
        baseURL: "https://api.github.com",
        headers: {
          accept: contentFormat, 
        }
      }).then((response) => {
        commit('SET_README_TO_STATE_REPO', {id: payload.id, content: response.data})
      })
    },
  },
};
