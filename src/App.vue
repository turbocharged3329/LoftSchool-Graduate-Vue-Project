<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {
    this.$router.push('/');
  }
}
</script>

<style>
#app {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  /* margin-top: 60px; */
}
body {
  margin: 0px;
  overflow: hidden;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
</style>
