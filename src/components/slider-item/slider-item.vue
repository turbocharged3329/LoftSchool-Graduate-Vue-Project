<template>
  <div class="slider-item">
    <div class="slider-item__status-bar">
      <slot></slot>
    </div>
    <div class="slider-item__header">
      <slot name="header"></slot>
    </div>
    <div class="slider-item__content">
      {{ content }}
    </div>
    <div class="slider-item__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderItem",
  components: {},
  props: {
    content: {
      type: String
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="css" scoped>
.slider-item {
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 300px;
  background-color: white;
  margin: 0 auto;
}
.slider-item__header {
  text-align: left;
}
.slider-item__content {
  display: block;
  margin: 5px;
  overflow-y: scroll;
}
</style>
