<template>
  <header class="header">
    <div class="header-left">
      <div class="header-left__title">
        <slot>
          <h1>Gitogram/</h1>
        </slot>
      </div>
    </div>
    <div class="header-right">
      <div class="header-left__user-actions">
        <slot name="user-actions"></slot>
      </div>
    </div>
    <div class="header__user-stories">
      <slot name="user-stories"></slot>
    </div>
  </header>
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
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 10%; 
  background: #FAFAFA;
  /* в медиа запрос */
}
.header-left {
  display: flex;
  flex-basis: 50%;
  align-items: center;
  justify-content: flex-start;
}
.header-right {
  display: flex;
  flex-basis: 50%;
  align-items: center;
  justify-content: flex-end;
}
.header-left__title {
  flex-basis: 25%;
}
.header-left__user-actions {
  flex-basis: 25%;
}
.header__user-stories {
  height: 200px;
  flex-basis: 100%;
}
</style>
