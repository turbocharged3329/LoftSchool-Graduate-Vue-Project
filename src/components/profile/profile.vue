<template>
  <div class="profile">
    <div class="profile__user">
      <div class="profile__user-header">
      <h1 class="profile__user-header-text">My profile</h1>
      </div>
      <!-- <UserLogo repoInfo /> -->
    </div>
    <div class="profile__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import UserLogo from '@/components/user-logo/user-logo';

export default {
  name: 'Profile',
  components: {
    // UserLogo
  },
  props: {},
  data() {
    return {}
  },
  mounted() {
    this.$router.push({name: 'UserLiked'})
  },
  methods: {}
}
</script>

<style lang="css" scoped>
.profile {
  display: flex;
}
.profile__user {
  flex-basis: 33.3%;
  border-top: 1px solid #999999;
  border-right: 1px solid #999999;
  height: calc(100vh - 263px);
  position: relative;  
}
.profile__content {
  flex-basis: 66.6%;
  border-top: 1px solid #999999;
  position: relative;
}
.profile__user-header {
  position: relative;
  margin-top: 2%;
}
.profile__user-header-text {
  position: absolute;
  left: 30%;
}
</style>
