<template>
  <div class="user-actions">
    <img
      src="../../assets/profile-photo.svg"
      class="user-actions__img"
      @click="goTo('UserLiked')"
    />
    <img
      src="../../assets/home-ico.svg"
      class="user-actions__img"
      @click="goTo('UserIssuesList')"
    />
    <img src="../../assets/sign-out-ico.svg" class="user-actions__img" />
  </div>
</template>

<script>
export default {
  name: "UserActions",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    goTo(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="css" scoped>
.user-actions11111111111111111111{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
