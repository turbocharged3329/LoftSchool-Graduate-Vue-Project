<template>
  <div class='mainpage'>
    <Header>
      <template v-slot:user-actions>
        <h1>123</h1>
        </template> 
    </Header>
  </div>
</template>

<script>
import Header from '@/components/header';
export default {
  name: 'MainPage',
  components: {
    Header
  },
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="css" scoped></style>
