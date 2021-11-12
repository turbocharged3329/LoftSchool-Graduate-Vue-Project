<template>
  <div class="slider-item">
    <div class="slider-item__header">
      <div class="slider-item__progress">
        <slot></slot>
      </div>
      <div class="slider-item__user">
        <slot name="header"></slot>
      </div>
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
  background-color: white;
  margin: 0 auto;
  border-radius: 5px;
  height: 100%;
}
.slider-item__header {
  text-align: left;
  width: 100%;
  height: 67px;
  border-bottom: 1px solid #cacaca;
}
.slider-item__content {
  display: block;
  margin: 5px;
  overflow-y: scroll;
  width: 100%;
  height: 75%;
}
.slider-item__progress {
  height: 5%;
  padding: 0 12px;
}
.slider-item__user {
  display: flex;
  height: 95%;
  align-items: center;
  padding: 0 12px;
}
.slider-item__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-top: 1px solid #cacaca;
}
</style>
