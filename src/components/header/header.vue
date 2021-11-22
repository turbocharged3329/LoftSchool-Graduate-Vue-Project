<template>
  <header 
  class="header" 
  :class="{'header__dark' : isDark}"
  >
    <div class="header-left">
      <div class="header-left__title">
        <slot>
          <MainTitle :isDark="isDark"/>
        </slot>
      </div>
    </div>
    <div class="header-right">
      <div class="header-right__user-actions">
        <slot name="user-actions"></slot>
      </div>
    </div>
    <div class="header__user-stories">
      <slot name="user-stories"></slot>
    </div>
  </header>
</template>

<script>
import MainTitle from '@/components/main-title/main-title';
export default {
  name: "Header",
  components: {
    MainTitle
  },
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
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
  background: #FAFAFA;
  width: 100%;
}
.header-left {
  display: flex;
  flex-basis: 50%;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  height: 30%;
}
.header-right {
  display: flex;
  flex-basis: 50%;
  align-items: center;
  justify-content: flex-end;
  align-self: flex-start;
  height: 30%;
}
.header-left__title {
  flex-basis: 25%;
  display: flex;
  margin-left: calc(5vw);
}
.header-right__user-actions {
  flex-basis: 20%;
  margin-right: calc(5vw);
  display: flex;
  justify-content: flex-end;
}
.header__user-stories {
  flex-basis: 100%;
  align-self: flex-end;
  height: 70%;
}
.header__dark {
  background: #000000;
}
@media (max-width: 1279px) {
  .header {
    max-height: 262px;
    height: 262px;
  } 
  .header-left__user-actions {
    flex-basis: 30%;
  }
}
@media (min-width: 1280px) {
  .header {
    max-height: 262px;
    height: 262px;
  } 
}
</style>
