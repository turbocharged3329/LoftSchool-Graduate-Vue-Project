<template>
  <div class="progress-bar">
    <div ref="progress" class="progress-bar__state"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  components: {},
  props: {
    start: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
       progress: {
        ticker: null,
        percents: 0,
      }
    }
  },
    watch: {
    start(value) {
      return value ? this.startProgress() : this.resetProgress() 
    }
  },
  methods: {
    startProgress() {
      this.$refs['progress'].style.width = 0 + '%'
      this.progress.ticker = setInterval(() => {
        if (this.progress.percents < 100) {
          this.progress.percents+= .125;
          this.$refs['progress'].style.width = this.progress.percents + '%'
        } else {
          clearInterval(this.progress.ticker);
        }
      }, 10)
    },
    resetProgress() {
      this.$refs['progress'].style.width = '0px';
      clearInterval(this.progress.ticker);
      this.progress.percents = 0
    }
  },
  mounted() {
    this.$nextTick(() => this.start ? this.startProgress() : this.resetProgress()) 
  },
  beforeUnmount() {
    clearInterval(this.progress.ticker)
  }
}
</script>

<style lang="css" scoped>
.progress-bar {
  flex-basis: 100%;
}
.progress-bar__state {
  background-color: #31ae54;
  width: 100%;
  height: 2px;
  /* margin: 10px 0; */
}
</style>
