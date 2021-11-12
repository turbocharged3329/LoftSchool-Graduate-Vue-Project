<template>
  <div class="mainpage">
    <Header>
      <template v-slot:user-actions>
        <UserActions />
      </template>
      <template v-slot:user-stories>
        <UserStories :users="getRepositories"/>
      </template>
    </Header>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import UserActions from "@/components/user-actions/user-actions";
import UserStories from "@/components/user-stories/user-stories";

import {createNamespacedHelpers} from 'vuex';
const {mapState, mapActions, mapGetters} = createNamespacedHelpers('repositories');

export default {
  name: "MainPage",
  components: {
    Header,
    UserActions,
    UserStories,
  },
  props: {},
  data() {
    return {
      repositories: [],
    };
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
    this.$router.push('/user-issues');
    this.getRepositoriesFromApi(this.getWeekAgoTime());
  },
};
</script>

<style lang="css" scoped>
.main {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1280px) {
  .main {
    margin: 0px 230px;
  }
}
</style>
