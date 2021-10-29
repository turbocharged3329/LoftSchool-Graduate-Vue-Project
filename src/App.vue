<template>
<div id="app">
  <MainPage />
</div>
</template>

<script>
import MainPage from '@/components/main-page';
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  /* margin-top: 60px; */
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
</style>
