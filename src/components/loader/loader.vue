<template>
  <div class="loader">
    <img :src="spinnerSrc" class="loader__spinner" />
  </div>
</template>

<script>
export default {
  name: "Loader",
  components: {},
  props: {
    color: {
      type: String,
      default: "green",
    },
  },
  data() {
    return {};
  },
  computed: {
    spinnerSrc() {
      return require(`/src/assets/${this.color}-loader.png`);
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="css" scoped>
.loader__spinner {
  animation-name: rotation;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  width: 34px;
  height: 34px;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
