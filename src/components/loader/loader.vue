<template>
  <div class="loader">
    <img
      src="../../assets/green-loader.png"
      class="loader__spinner"
    />
  </div>
</template>

<script>
export default {
  name: "Loader",
  components: {},
  props: {},
  data() {
    return {};
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
