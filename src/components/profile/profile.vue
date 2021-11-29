<template>
  <div class="profile">
    <div class="profile__user">
      <div class="profile__user-info">
        <div class="profile__user-header">
          <h1 class="profile__user-header-text">My profile</h1>
        </div>
        <UserLogo
          repo-info
          :repository="{
            name: getUserData.login,
            avatar: getUserData.avatar_url,
            fullname: getUserData.name,
          }"
        />
      </div>
    </div>
    <div class="profile__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserLogo from "@/components/user-logo/user-logo";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import { computed, onMounted } from "vue";

export default {
  name: "Profile",
  components: {
    UserLogo,
  },
  setup() {
    const {state} = useStore();
    const router = useRouter();

    const getUserData = computed(() => {
      return state.user.user.data;
    });

    onMounted(() => {
      router.push({ name: "UserLiked" });
    })

    return {
      getUserData,
      state,
      router
    };
  },
};
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
  display: flex;
  justify-content: center;
}
.profile__content {
  flex-basis: 66.6%;
  border-top: 1px solid #999999;
  position: relative;
  height: calc(100vh - 262px);
  overflow-y: scroll;
}
.profile__user-header {
  position: relative;
  margin-top: 15px;
  margin-bottom: 30px;
}
.profile__user-info {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
