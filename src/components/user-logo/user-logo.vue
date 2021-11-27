<template>
  <div class="user-logo" :class="{ vertical: isVertical }">
    <div class="user-logo__avatar">
      <img
        :src="
          repository.avatar ? repository.avatar : '../assets/profile-photo.svg'
        "
        class="user-img"
        :class="{
          big: isBig || repoInfo,
          small: !isBig && !repoInfo,
          active: isActive,
        }"
      />
    </div>
    <div
      class="user-logo__info"
      :class="{ 'user-logo__info-with-gap': !isVertical }"
    >
      <p
        class="user-logo__user-name"
        :class="{ 'text-bold': !isVertical, 'text-normal': isVertical }"
      >
        {{ repository.name }}
      </p>
      <div v-if="repoInfo" class="user-logo__repo-info">
        <div class="repo-info__statistics">
          <div class="statistics__repos">
            <span>10</span>
            <router-link :to="{ name: 'UserLiked' }">
              <a
                :class="{
                  'statistics__watchers-link': currentRoute != 'UserLiked',
                }"
              >
                repos
              </a>
            </router-link>
          </div>
          <div class="statistics__watchers">
            <span>54</span>
            <router-link :to="{ name: 'UserFollowings' }">
              <a
                :class="{
                  'statistics__watchers-link': currentRoute != 'UserFollowings',
                }"
              >
                watchers
              </a>
            </router-link>
          </div>
        </div>
        <div 
        class="repo-info__fullname"
        v-if="repository.fullname"
        >
          <span class="fullname">User Fullname</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogo",
  components: {},
  props: {
    repository: {
      type: Object,
    },
    isVertical: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isBig: {
      type: Boolean,
      default: false,
    },
    repoInfo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    currentRoute() {
      return this.$router.currentRoute.value.name;
    }
  },
};
</script>

<style lang="css" scoped>
.user-logo {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.user-logo__avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-img {
  border-radius: 50%;
}
.user-logo__user-name {
  margin: 0;
  text-align: left;
}
.user-logo__info {
  font-size: 14px;
}
.user-logo__info-with-gap {
  margin-left: 10px;
}
.repo-info__statistics {
  display: flex;
}
.statistics__watchers {
  margin-left: 5px;
}
.statistics__watchers-link {
  color: #31ae54;
}
.repo-info__fullname {
  text-align: left;
}
.fullname {
  color: rgba(0, 0, 0, 0.5);
}
.vertical {
  flex-direction: column;
}
.big {
  width: 90px;
  height: 90px;
}
.small {
  width: 37px;
  height: 37px;
}
.active {
  border: 2px solid #a6328d;
  border-radius: 50%;
  padding: 2px;
}
.text-bold {
  font-weight: bold;
  font-size: 24px;
}
.text-normal {
  font-weight: normal;
  font-size: 12px;
}
</style>
