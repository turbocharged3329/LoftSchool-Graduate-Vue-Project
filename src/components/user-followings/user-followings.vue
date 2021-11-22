<template>
  <div class="user-followings">
    <div class="user-followings__header">
      <h1 class="user-followings__header-text">Followings</h1>
      <span class="user-followings__header-count">125</span>
    </div>
    <div class="user-followings__content">
      <div class="user-followings__loading">
        <Loader v-if="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/loader/loader";

export default {
  name: "UserFollowings",
  components: {
    Loader,
  },
  props: {},
  data() {
    return {
      loading: true,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="css" scoped>
.user-followings__header {
  text-align: left;
  display: flex;
  margin-top: 15px;
}
.user-followings__header-text {
  flex-basis: 50%;
  justify-content: flex-start;
  padding-left: 5%;
}
.user-followings__header-count {
  display: flex;
  flex-basis: 50%;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  padding-right: 5%;
  color: rgba(0, 0, 0, 0.5);
}
.user-followings__loading {
  margin-top: 5%;
}
</style>
