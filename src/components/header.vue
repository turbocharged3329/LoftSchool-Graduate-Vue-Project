<template>
  <div class="header">
    <div>
    <slot>
      <h1>Gitogram/</h1>
    </slot>
    </div>
    <div>
    <slot name="user-actions">
    </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="css" scoped></style>
