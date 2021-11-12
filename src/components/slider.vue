<template>
  <div class="slider">
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
</template>

<script>
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
  display: flex;
  background: black;
  width: calc(100vw);
  height: calc(100vh);
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
</style>
