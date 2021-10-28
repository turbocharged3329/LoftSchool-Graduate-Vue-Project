<template>
  <div class="user-issues">
    <div class="user-issues__header">
      <img src="../assets/profile-photo.svg" class="user-logo">
      <h3 class="user-name">{{ user.name }}</h3>
    </div>
    <div class="user-issues__user-info">
      <h1 class="user-info__title">
        {{ user.profession }}
      </h1>
      <p class="user-info__prof-info">
        {{ user.description }}
      </p>
      <div class="user-info__actions">
        <RepoActions :action="{type: 'like', count: 5}"/>
        <RepoActions :action="{type: 'fork', count: 4}"/>
      </div>
    </div>
  </div>
</template>

<script>
import RepoActions from '@/components/repo-actions'
export default {
  name: 'UserIssues',
  components: {
    RepoActions
  },
  props: {
    user: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {}
  },
  methods: {
  },
}
</script>

<style lang="css" scoped>
.user-issues {
  padding: 2% 15%;
  /* добавить в медиазапрос */
}
.user-issues__header {
  display: flex;
}
.user-info__title {
  text-align: left;
}
.user-issues__user-info {
  border-radius: 20px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  padding: 24px 20px;
}
.user-info__prof-info {
  text-align: left;
}
.user-info__actions {
  display: flex;
  border-radius: 20px;
}
</style>
