<template>
  <div class="users-stories">
    <ul class="users-stories__list">
      <li v-for="user in users" :key="user.name" class="users-stories__item">
        <div class="users-stories__story">
          <img src="../assets/profile-photo.svg" class="profile-photo_active" />
          <p class="story__user-name">{{ user.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserStories",
  components: {},
  data() {
    return {
      users: [
        {
          name: "John",
        },
        {
          name: "John",
        },
        {
          name: "John",
        },
        {
          name: "John",
        },
        {
          name: "John",
        },
        {
          name: "John",
        },
        {
          name: "John",
        },
        {
          name: "John",
        },
        {
          name: "John",
        },
        {
          name: "John",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.users-stories {
  height: 100%;
  width: 100%;
}
.users-stories__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
}
.users-stories__story {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
