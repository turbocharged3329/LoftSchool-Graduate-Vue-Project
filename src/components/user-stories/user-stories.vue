<template>
  <div class="users-stories">
    <ul class="users-stories__list">
      <li v-for="(user, index) in users" :key="user.name" class="users-stories__item">
        <UserLogo 
        isBig 
        isActive 
        isVertical 
        :repository="user"
        @click="$router.push({name: 'Slider', params: {activeItem: index }})" />
      </li>
    </ul>
  </div>
</template>

<script>
import UserLogo from '@/components/user-logo/user-logo';

export default {
  name: "UserStories",
  components: {
    UserLogo
  },
  props: {
    users: {
      type: Array
    }
  },
  data() {
    return {
    };
  },
  mounted() {
  }
};
</script>

<style lang="css" scoped>
.users-stories {
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
}
.user-stories::-webkit-scrollbar {
  display: none; 
}
.users-stories__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0px;
}
.users-stories__story {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.users-stories__item {
  margin-right: 31px;
}
.profile-photo_active {
  width: 80px;
  height: 80px;
  border: 2px solid #a6328d;
  border-radius: 50%;
  padding: 2px;
}
.story__user-name {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 10px;
}
</style>
