<template>
  <div class="slider">
    <Header isDark>
      <template v-slot:user-actions>
        <button style="color: white;">x</button>
      </template>
    </Header>
    <div class="slider-items">
    <template v-for="repo in getRepositories" :key="repo.id">
      <SliderItem :content="'This is the first story'">
        <template v-slot:default>
          <ProgressBar></ProgressBar>
        </template>
        <template v-slot:header> 
          <UserLogo :repository="repo"/>
        </template>
        <template v-slot:footer>
          <CustomButton :text="'Follow'" isBig />
        </template>
      </SliderItem>
    </template>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import SliderItem from '@/components/slider-item/slider-item';
import ProgressBar from '@/components/progress-bar/progress-bar';
import UserLogo from '@/components/user-logo/user-logo';
import CustomButton from '@/components/custom-button/custom-button';
import {createNamespacedHelpers} from 'vuex';
const {mapState, mapGetters, mapActions} = createNamespacedHelpers('repositories');

export default {
  name: 'Slider',
  components: {
    SliderItem,
    ProgressBar,
    UserLogo,
    CustomButton,
    Header
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      repositories: state => state.repositories
    }),
    ...mapGetters([
      'getRepositories'
    ])
  },
  mounted() {
    this.getRepositoriesFromApi(this.getWeekAgoTime())
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
  }
}
</script>

<style lang="css" scoped>
.slider {
  background: black;
  width: 100%;
  height: calc(100vh);
  overflow: hidden;
}
.slider-items {
  display: flex;
  height: 70%;
}
</style>
