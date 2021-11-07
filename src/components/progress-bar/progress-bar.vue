<template>
  <div class="progress-bar">
    <div class="progress-bar__state"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  components: {},
  props: {},
  data() {
    return {
       progress: {
        ticker: null,
        percents: 0,
      }
    }
  },
  methods: {
    startProgress() {
      const state = document.querySelector('.progress-bar__state')
      
      state.style.width = 0 + '%'
      this.progress.ticker = setInterval(() => {
        if (this.progress.percents < 100) {
          this.progress.percents+= .125;
          state.style.width = this.progress.percents + '%'
        } else {
          clearInterval(this.progress.ticker);
        }
      }, 10)
    }
  },
  mounted() {
    this.startProgress()
  },
  beforeUnmount() {

  }
}
</script>

<style lang="css" scoped>
.progress-bar__state {
  background-color: #31ae54;
  width: 100%;
  height: 2px;
}
</style>
