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
      <!-- компонент слайдера -->
      <!-- <SliderItem :content="'This is the first story'">
        <template v-slot:default>
          <ProgressBar></ProgressBar>
        </template>
        <template v-slot:header> 
          <UserLogo :user="users[0]"/>
        </template>
        <template v-slot:footer>
          <CustomButton :text="'Follow'" isBig />
        </template>
      </SliderItem> -->
      <!--  -->
      <template v-for="repo in getRepositories" :key="repo.name">
      <UserIssues :repository="repo">
        <template v-slot:actions>
          <RepoActions :action="{ type: 'like', count: repo.stars }" isLeftRounded />
          <RepoActions :action="{ type: 'fork', count: repo.forks }" isRightRounded />
        </template>
      </UserIssues>
      </template>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import RepoActions from "@/components/repo-actions/repo-actions";
import UserActions from "@/components/user-actions/user-actions";
import UserStories from "@/components/user-stories/user-stories";
import UserIssues from "@/components/user-issues/user-issues";
// import SliderItem from "@/components/slier-item/slider-item";
// import ProgressBar from '@/components//progress-bar/progress-bar';
// import UserLogo from '@/components/user-logo';
// import CustomButton from '@/components/custom-button';
import {createNamespacedHelpers} from 'vuex';
const {mapState, mapActions, mapGetters} = createNamespacedHelpers('repositories');

export default {
  name: "MainPage",
  components: {
    Header,
    UserActions,
    UserStories,
    UserIssues,
    RepoActions,
    // SliderItem,
    // ProgressBar,
    // UserLogo,
    // CustomButton
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
    getRepositories() {
      const queryParams = new URLSearchParams();
      queryParams.append('order', 'desc');
      queryParams.append('sort', 'start');
      queryParams.append('q', 'language:javascript created:>'+this.getWeekAgoTime())
      queryParams.append('per_page', 10)

      return this.axios({
        url: "/search/repositories",
        method: "GET",
        baseURL: "https://api.github.com",
        params: queryParams
      });
    },
  },
  mounted() {
    this.getRepositoriesFromApi(this.getWeekAgoTime());
    // 
    // this.getRepositories()
    // .then((response) => {
    // for (let item of response.data.items) {      
    //   this.repositories.push({
    //     name: item.owner.login,
    //     avatar: item.owner.avatar_url,
    //     profession: item.language,
    //     description: item.description,
    //     forks: item.forks_count,
    //     stars: item.watchers_count,
    //     issues: [],
    //     issues_url: item.open_issues > 0 
    //     ? item.issues_url.replace('{/number}', '')
    //     : null
    //   })
    // }

    // return response;
    // })
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
