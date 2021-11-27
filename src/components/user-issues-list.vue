<template>
  <div class="user-issues-list">
    <template v-for="repo in getRepositories" :key="repo.name">
      <UserIssues :repository="repo">
        <template v-slot:actions>
          <RepoActions :action="{ type: 'like', count: repo.stars }" isLeftRounded />
          <RepoActions :action="{ type: 'fork', count: repo.forks }" isRightRounded />
        </template>
      </UserIssues>
      </template>
  </div>
</template>

<script>
import UserIssues from '@/components/user-issues/user-issues';
import {createNamespacedHelpers} from 'vuex';
import RepoActions from '@/components/repo-actions/repo-actions';
const {mapState, mapActions, mapGetters} = createNamespacedHelpers('repositories');

export default {
  name: 'UserIssuesList',
  components: {
    UserIssues,
    RepoActions
  },
  props: {},
  data() {
    return {}
  },
  computed: {
  ...mapState ({
    repositories: state => state.repositories  
  }),
  ...mapGetters ([
    'getRepositories'
  ])
  },
  methods: {
    ...mapActions([
      'getRepositoriesFromApi'
    ]),
    getWeekAgoTime() {
      let time = new Date();
      time.setDate(time.getDate() - 7);
      return time.toISOString().split('T')[0]; 
    },
  },
  mounted() {
    this.getRepositoriesFromApi(this.getWeekAgoTime());
  },
}
</script>

<style lang="css" scoped>
.user-issues-list {
  padding: 0 15%;
  height: calc(100vh - 262px);
  overflow-y: scroll;
}
</style>
