<template>
  <div class="user-followings">
    <div class="user-followings__header">
      <h1 class="user-followings__header-text">Followings</h1>
      <span class="user-followings__header-count">{{ getUserLikedRepos.length }}</span>
    </div>
    <div class="user-followings__content">
      <div v-if="loading" class="user-followings__loading">
        <Loader />
      </div>
      <template v-for="repo in getUserLikedRepos" :key="repo.id">
        <div class="user-followings__user" v-if="!loading">
          <div class="user-followings__user-logo">
            <img class="user-logo__img" :src="repo.owner.avatar_url" />
            <div class="user-followings__user-info">
              <div class="user-info__name">{{ repo.name }}</div>
              <div class="user-info__organization">user</div>
            </div>
          </div>
          <div class="user-followings__action">
            <FollowButton 
            isActive :user="{owner: repo.owner.login, name: repo.name}" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/loader/loader";
import FollowButton from "@/components/follow-button/follow-button"
import {useStore} from 'vuex';
import {onMounted, computed, ref} from 'vue';

export default {
  name: "UserFollowings",
  components: {
    Loader,
    FollowButton
  },
  setup() {
    const loading = ref(true);
    const { state, dispatch } = useStore();
    const getUserLikedRepos = computed(() => {
      return state.user.userLiked.data;
    })

    onMounted(async () => {
      await dispatch('user/getUserLikedReposFromAPI')
      loading.value = false;
    })
    
    return {
      state,
      getUserLikedRepos,
      loading
    }
  },
};
</script>

<style lang="css" scoped>
.user-followings__content {
  padding: 0 5%;
}
.user-followings__user {
  width: 100%;
  height: 120px;
}
.user-followings__header {
  text-align: left;
  display: flex;
  margin-top: 15px;
  display: flex;
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
  font-size: 1.5rem;
  padding-right: 5%;
  color: rgba(0, 0, 0, 0.5);
}
.user-followings__loading {
  margin-top: 5%;
}
.user-followings__user {
  width: 100%;
  display: flex;
}
.user-followings__user-logo {
  flex-basis: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.user-logo__img {
  width: 75px;
  height: auto;
  border-radius: 50%;
}
.user-followings__user-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 4%;
  height: 40%;
}
.user-info__name {
  font-size: 18px;
  font-weight: bold;
}
.user-info__organization {
  font-size: 12px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
}
.user-followings__action {
  flex-basis: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
