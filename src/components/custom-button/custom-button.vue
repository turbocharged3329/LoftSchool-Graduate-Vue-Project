<template>
  <div class="custom-button">
    <button
      class="custom-button__btn"
      :class="{
        'custom-button__btn-big': isBig,
        'custom-button__btn-small': !isBig,
      }"
    >
      <span class="custom-button__text" v-if="!isLoading">{{ text }}</span>
      <img class="custom-button__img" v-if="imageSrc && !isLoading" />
      <Loader v-if="isLoading" :color="this.bgColor == 'green' ? 'white' : 'green'"/>
    </button>
  </div>
</template>

<script>
import Loader from "@/components/loader/loader";
export default {
  name: "CustomButton",
  components: {
    Loader
  },
  props: {
    text: {
      type: String,
      default: "Git-Button",
    },
    imageSrc: {
      type: String,
      default: null,
    },
    isBig: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "white",
    }
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.custom-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-button__btn {
  background: #31ae54;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 44px;
  font-weight: bold;
  cursor: pointer;
}
.custom-button__img {
  width: 22px;
  height: 22px;
  margin-left: 2%;
}
.custom-button__btn-big {
  min-width: 256px;
  max-width: 276;
}
.custom-button__btn-small {
  min-width: 115px;
}
</style>
