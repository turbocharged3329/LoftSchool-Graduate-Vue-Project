<template>
  <div class="slider-item__wrapper">
    <div class="slider-item" :class="{ 'slider-item__active': isActive }">
      <div class="slider-item__header">
        <div class="slider-item__progress">
          <slot></slot>
        </div>
        <div class="slider-item__user">
          <slot name="header"></slot>
        </div>
      </div>
      <div class="slider-item__content">
        <div class="slider-item__placeholder" v-if="!isSlideWithContent && !loading">
          <img
            src="../../assets/big-placeholder.png"
            class="slider-item__placeholder-img"
          />
          <img
            src="../../assets/small-placeholder.png"
            class="slider-item__placeholder-img"
          />
          <img
            src="../../assets/small-placeholder.png"
            class="slider-item__placeholder-img"
          />
        </div>
        <Loader v-if="loading" />
        <div 
        class="slider-item__content-text" 
        v-if="!loading" 
        v-html="repository.readme"></div>
      </div>
      <div class="slider-item__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapGetters } = createNamespacedHelpers("repositories");
import Loader from '@/components/loader/loader';

export default {
  name: "SliderItem",
  components: {
    Loader
  },
  props: {
    repository: {
      type: Object,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      isSlideWithContent: false,
    };
  },
  computed: {
    ...mapState({
      repositories: (state) => state.repositories,
    }),
    ...mapGetters([
      'getRepositories'
    ])
  },
  watch: {
    isActive(value) {
      if (value) {
        this.loading = true;
        this.getRepoReadmeFromApi({
        owner: this.repository.name,
        repo: this.repository.repo_name,
        id: this.repository.id
      }).then(() => {
        this.loading = false;
        if (!this.isSlideWithContent) this.isSlideWithContent = true;
      })
      } 
    }
  },
  methods: {
    ...mapActions(["getRepoReadmeFromApi"]),
  },
  async mounted() {
  },
};
</script>

<style lang="css" scoped>
.slider-item__wrapper {
  padding: 0 50px;
  width: 700px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-item {
  display: flex;
  flex-direction: column;
  min-width: 375px;
  max-width: 375px;
  background-color: white;
  margin: 0;
  border-radius: 5px;
  height: 538px;
  transition: 0.4s;
}
.slider-item__header {
  text-align: left;
  width: 100%;
  min-height: 67px;
  max-height: 67px;
  border-bottom: 1px solid #cacaca;
}
.slider-item__content {
  overflow-y: scroll;
  height: 75%;
  padding: 30px;
}
.slider-item__placeholder {
  text-align: left;
}
.slider-item__placeholder-img {
  margin: 0.5rem 0;
}
.slider-item__progress {
  height: 20%;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-item__user {
  display: flex;
  height: 80%;
  align-items: center;
  padding: 0 12px;
}
.slider-item__loader-spinner {
  animation-name: rotation;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.slider-item__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-top: 1px solid #cacaca;
}
.slider-item__active {
  transform: scale(1.24);
}
@media (min-width: 375px) and (max-width: 767px) {
.slider-item__active {
  transform: scale(0.9);
}
}
</style>
