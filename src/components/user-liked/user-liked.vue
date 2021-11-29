<template>
  <div class="user-liked">
    <div class="user-liked__wrapper">
      <div class="user-liked__header">
        <h1 class="user-liked__header-text">Repositories</h1>
        <span class="user-liked__header-count">{{ getUserLikedRepos.length }}</span>
      </div>
      <div class="user-liked__content">
        <div class="user-followings__loading">
          <Loader v-if="loading" />
          </div>
          <template v-for="repo in getUserLikedRepos" :key="repo.id">
            <UserIssues
              v-if="!loading"
              :isWithIssues="false"
              :isWithAvatar="false"
              :repository="{
                profession: repo.language,
                description: repo.description,
              }"
            >
              <template v-slot:actions>
                <RepoActions
                  :action="{ type: 'like', owner: repo.owner.login, name: repo.name ,count: repo.stargazers_count }"
                  isActive
                  isLeftRounded
                />
                <RepoActions
                  :action="{ type: 'fork', owner: repo.owner.login, name: repo.name, count: repo.forks }"
                  isRightRounded
                />
              </template>
            </UserIssues>
          </template>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/loader/loader";
import UserIssues from "@/components/user-issues/user-issues";
import RepoActions from '@/components/repo-actions/repo-actions';
import { useStore } from "vuex";
import {onMounted, computed, ref} from 'vue';

export default {
  name: "UserLiked",
  components: {
    Loader,
    UserIssues,
    RepoActions
  },
  props: {},
  setup() {
    const loading = ref(true);
    const {dispatch, state} = useStore();
    const getUserLikedRepos = computed(() => {
      return state.user.userLiked.data
    })

    onMounted(async () => {
      await dispatch('user/getUserLikedReposFromAPI')
      loading.value = false;
    })

    return {
      getUserLikedRepos
    }
  },
};
</script>

<style lang="css" scoped>
.user-liked__header {
  text-align: left;
  margin-top: 15px;
  padding: 0 5%;
  display: flex;
}
.user-liked__header-text {
  flex-basis: 50%;
}
.user-liked__header-count {
  flex-basis: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
}
.user-liked__content {
  padding: 0 5%;
}
</style>
