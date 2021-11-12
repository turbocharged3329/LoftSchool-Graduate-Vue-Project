<template>
  <div>
    <h1 :class="{'title__dark' : isDark}">
      <slot>
        Gitogram/
      </slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'MainTitle',
  components: {},
  props: {
    isDark: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="css" scoped>
.title__dark {
  color: white;
}
</style>
