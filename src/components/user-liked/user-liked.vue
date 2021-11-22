<template>
  <div class="user-liked">
    <div class="user-liked__wrapper">
      <div class="user-liked__header">
        <h1 class="user-liked__hedaer-text">Repositories</h1>
      </div>
      <div class="user-liked__content">
        <div class="user-followings__loading">
          <Loader v-if="loading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/loader/loader";
export default {
  name: "UserLiked",
  components: {
    Loader,
  },
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="css" scoped>
.user-liked__header {
  text-align: left;
  margin-top: 15px;
}
.user-liked__hedaer-text {
  padding: 0 5%;
}
</style>
