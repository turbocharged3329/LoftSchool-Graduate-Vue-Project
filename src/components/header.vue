<template>
  <div class="header">
    <div class="navigation">
      <div class="title">
        <slot>
          <h1>Gitogram/</h1>
        </slot>
      </div>
      <div class="user-actions">
        <slot name="user-actions"></slot>
      </div>
    </div>
    <div class="user-stories">
      <slot name="user-stories"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.header {
  display: flex;
  flex-direction: column;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-basis: 100%;
}
.title {
  flex-basis: 10%;
}
.user-actions {
  flex-basis: 10%;
}
.user-stories {
  height: 200px;
}
</style>
