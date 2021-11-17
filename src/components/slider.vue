<template>
  <div class="slider">
    <Header isDark>
      <template v-slot:user-actions>
        <button class="slider__close-button" @click="$router.go(-1)">×</button>
      </template>
    </Header>
    <button
      @click="prevSlide"
      class="slider__nav-btn slider__nav-btn-left"
      v-show="this.currentItem > 0"
    >
      <img src="../assets/arrow.png" class="slider__nav-btn-arrow" />
    </button>
    <button
      @click="nextSlide"
      class="slider__nav-btn slider__nav-btn-right"
      v-show="this.currentItem < this.getRepositories.length - 1"
    >
      <img src="../assets/arrow.png" class="slider__nav-btn-arrow" />
    </button>
    <div class="slider-items" ref="slider-items">
      <template v-for="(repo, index) in getRepositories" :key="repo.id">
        <SliderItem :repository="repo" :isActive="this.currentItem == index">
          <template v-slot:default>
            <ProgressBar :start="this.currentItem == index"></ProgressBar>
          </template>
          <template v-slot:header>
            <UserLogo :repository="repo" />
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
import Header from "@/components/header/header";
import SliderItem from "@/components/slider-item/slider-item";
import ProgressBar from "@/components/progress-bar/progress-bar";
import UserLogo from "@/components/user-logo/user-logo";
import CustomButton from "@/components/custom-button/custom-button";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } =
  createNamespacedHelpers("repositories");

export default {
  name: "Slider",
  components: {
    SliderItem,
    ProgressBar,
    UserLogo,
    CustomButton,
    Header,
  },
  props: ['activeItem'],
  data() {
    return {
      currentItem: 0,
    };
  },
  computed: {
    ...mapState({
      repositories: (state) => state.repositories,
    }),
    ...mapGetters(["getRepositories"]),
  },
  async mounted() {
    await this.getRepositoriesFromApi(this.getWeekAgoTime());
    this.currentItem = this.activeItem;
    this.moveSlider();
  },
  methods: {
    ...mapActions(["getRepositoriesFromApi"]),
    prevSlide() {
      if (this.currentItem > 0) {
        this.currentItem--;
        this.moveSlider()
      } else {
        this.$refs["slider-items"].style["margin-left"] = "-237.5px";
      }
    },
    nextSlide() {
      if (this.currentItem < this.getRepositories.length - 1) {
        this.currentItem++;
        this.moveSlider()
      }
    },
    getWeekAgoTime() {
      let time = new Date();
      time.setDate(time.getDate() - 7);
      return time.toISOString().split("T")[0];
    },
    moveSlider() {
      this.$refs["slider-items"].style["margin-left"] = `-${237.5 + 475 * this.currentItem}px`;
    }
  },
};
</script>

<style lang="css" scoped>
.slider {
  display: block;
  background: black;
  width: 100%;
  height: calc(100vh);
  overflow: hidden;
}
.slider-items {
  display: flex;
  height: 70%;
  position: absolute;
  left: 50%;
  margin-left: -350px;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  transition: 0.4s;
}
.slider__close-button {
  background: transparent;
  color: white;
  width: 22px;
  height: 22px;
  border: none;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider__nav-btn {
  z-index: 99;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  background: white;
}
.slider__nav-btn-left {
  left: 37%;
  transform: rotate(180deg);
}
.slider__nav-btn-right {
  right: 37%;
}
.slider__nav-btn-arrow {
  filter: grayscale(100);
  width: 18px;
}
.slider__nav-btn:hover {
  background: white;
}
.slider__nav-btn:hover .slider__nav-btn-arrow {
  filter: grayscale(0);
}
@media (min-width: 375px) and (max-width: 767px) {
  .slider__nav-btn-left {
    left: 2%;
  }
  .slider__nav-btn-right {
    right: 2%;
  }
}
@media (min-width: 768px) and (max-width: 1439px) {
  .slider__nav-btn-left {
    left: 18%;
  }
  .slider__nav-btn-right {
    right: 18%;
  }
}
</style>
